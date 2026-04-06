"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { sendEmailVerification } from "firebase/auth";
import { useRouter } from "next/navigation";
import { FiArrowUpRight } from "react-icons/fi";
import { auth } from "@/lib/firebase";
// import { redirect } from "next/navigation";

const VerificationPage = () => {
  // redirect("/login");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const router = useRouter();

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleCheckVerification = async () => {
  setLoading(true);
  setMessage("");

  try {
    const user = auth.currentUser;

    if (!user) {
      router.push("/login");
      return;
    }

    const startTime = Date.now();

    await user.reload();

    const elapsed = Date.now() - startTime;
    const remaining = 4000 - elapsed;

    if (remaining > 0) {
      await delay(remaining);
    }

    if (user.emailVerified) {
      setIsVerified(true);

      setMessage(
        "Your email has been verified successfully. Please wait for admin approval."
      );


    } else {
      setMessage(
        "Your email is not verified yet. Please check your inbox or resend the verification email."
      );
    }
  } catch (error) {
    console.error(error);
    setMessage("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    const interval = setInterval(async () => {
      const user = auth.currentUser;

      if (user) {
        await user.reload();

        if (user.emailVerified) {
          setIsVerified(true);
        }
      }
    });

    return () => clearInterval(interval);
  }, []);

  const handleResendEmail = async () => {
    try {
      const user = auth.currentUser;

      if (!user) {
        setMessage("Please login again to resend email.");
        return;
      }

      await sendEmailVerification(user);
      setMessage("Verification email resent. Check your inbox.");
    } catch (error) {
      console.error(error);
      setMessage("Failed to resend email.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5 px-4 text-center">
      {loading && (
        <div className="w-16 h-16 border-4 border-[#ffd061] border-t-transparent rounded-full animate-spin"></div>
      )}

      {/* TITLE */}
      <h1 className="text-2xl font-bold">
        {isVerified ? "Verification Successful" : "Verify Your Email"}
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-600 max-w-md">
        {isVerified
          ? "Your email has been successfully verified. Your account is currently under review. Please wait for an administrator to grant you access to the dashboard."
          : "We’ve sent a verification link to your email. Please check your inbox and click the link to activate your account."}
      </p>

      {/* BUTTON */}
      {!isVerified && (
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
      )}

      {/* RESEND */}
      {!isVerified && (
        <button
          onClick={handleResendEmail}
          className="cursor-pointer text-sm hover:text-[#f5c84a] underline"
        >
          Resend Email
        </button>
      )}

      {/* MESSAGE */}
      {message && <p className="text-sm text-red-700 font-bold">{message}</p>}
    </div>
  );
};

export default VerificationPage;
