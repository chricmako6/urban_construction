"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { sendEmailVerification } from "firebase/auth";
import { useRouter } from "next/navigation";
import { FiArrowUpRight } from "react-icons/fi";

const VerificationPage = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleCheckVerification = async () => {
    setLoading(true);
    setMessage("");

    try {
      const user = auth.currentUser;

      if (user) {
        await user.reload(); // VERY IMPORTANT

        if (user.emailVerified) {
          // UPDATE BACKEND (THIS IS THE REAL FIX)
          await axios.post("http://localhost:4000/api/auth/verify-email", {
            uid: user.uid,
          });

          setTimeout(() => {
            router.push("/dash_board");
          }, 1500);
        } else {
          router.push("/verification");
        }
      } else {
        router.push("/verification");
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      const user = getAuth().currentUser;

      if (user) {
        await user.reload();

        if (user.emailVerified) {
          router.push("/dash_board");
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleResendEmail = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        setMessage("Login again to resend email.");
        return;
      }

      await sendEmailVerification(user);
      setMessage(" Verification email resent. Check your inbox.");
    } catch (error) {
      console.error(error);
      setMessage("Failed to resend email.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      {loading && (
        <div className="w-16 h-16 border-5 border-[#ffd061] border-t-transparent rounded-full animate-spin mb-4"></div>
      )}
      <h1 className="text-2xl font-bold">Verify your Email</h1>

      <p className="text-gray-600 text-center max-w-md">
        We’ve sent a verification link to your email. Please check your inbox
        and click the link to activate your account.
      </p>

      {/* CHECK BUTTON */}
      <button
        onClick={handleCheckVerification}
        disabled={loading}
        className="group/btn bg-[#ffd061] hover:bg-[#f5c84a] shadow cursor-pointer text-black flex items-center gap-3 px-5 py-2 rounded-md font-semibold"
      >
        {loading ? "Checking..." : "Proceed"}
        <span className="bg-[#383635] inline-block p-1 rounded-sm ml-2 group-hover/btn:rotate-45 transition-transform duration-300">
          <FiArrowUpRight className="text-white w-5 h-5" />
        </span>
      </button>

      {/* RESEND BUTTON */}
      <button
        onClick={handleResendEmail}
        className="cursor-pointer text-sm hover:text-[#f5c84a] underline"
      >
        Resend Email
      </button>

      {/* MESSAGE */}
      {message && <p className="text-sm text-gray-700">{message}</p>}
    </div>
  );
};

export default VerificationPage;
