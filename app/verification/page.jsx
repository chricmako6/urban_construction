"use client";

import React, { useState, useEffect } from "react";
import { sendEmailVerification, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { FiArrowUpRight } from "react-icons/fi";
import { auth } from "@/lib/firebase";

const VerificationPage = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [checkingUser, setCheckingUser] = useState(true);

  const router = useRouter();

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  // AUTH GUARD (VERY IMPORTANT)
  useEffect(() => {
    const startTime = Date.now();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      const elapsed = Date.now() - startTime;
      const remaining = 5000 - elapsed;

      // Ensure minimum 5 seconds loading
      if (remaining > 0) {
        await delay(remaining);
      }

      if (!user) {
        router.push("/login"); // redirect if not logged in
      } else {
        setCheckingUser(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  // CHECK VERIFICATION STATUS
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

      // Smooth UX delay
      const elapsed = Date.now() - startTime;
      if (elapsed < 2000) {
        await delay(2000 - elapsed);
      }

      if (user.emailVerified) {
        setIsVerified(true);
        setMessage(
          "Email verified successfully. Waiting for admin approval...",
        );

        // Redirect after short delay
        setTimeout(() => {
          router.push("/verification");
        }, 3000);
      } else {
        setMessage(
          "Email not verified yet. Please check your inbox or resend the verification email.",
        );
      }
    } catch (error) {
      console.error(error);

      if (error.code === "auth/network-request-failed") {
        setMessage("Network error. Please check your connection.");
      } else {
        setMessage("Unable to verify at the moment. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // SAFE AUTO CHECK (no spamming)
  useEffect(() => {
    const interval = setInterval(async () => {
      const user = auth.currentUser;

      if (user) {
        try {
          await user.reload();

          if (!user.emailVerified) {
            setIsVerified(true);
            setMessage("Email for verification has been sent successfully.");

            clearInterval(interval);

            setTimeout(() => {
              router.push("/verification");
            }, 2000);
          }
        } catch (err) {
          console.log("Auto-check failed:", err.message);
        }
      }
    }); // safe interval

    return () => clearInterval(interval);
  }, [router]);

  // RESEND EMAIL
  const handleResendEmail = async () => {
    try {
      const user = auth.currentUser;

      if (!user) {
        setMessage("Session expired. Please login again.");
        router.push("/login");
        return;
      }

      await sendEmailVerification(user);

      setMessage("Verification email sent again. Please check your inbox.");
    } catch (error) {
      console.error(error);

      if (error.code === "auth/too-many-requests") {
        setMessage("Too many requests. Please wait before trying again.");
      } else {
        setMessage("Failed to resend email. Please try again.");
      }
    }
  };

  // WAIT FOR AUTH CHECK
  if (checkingUser) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center z-50">
        {/* Spinner */}
        <div className="w-14 h-14 border-4 border-[#ffd061] border-t-transparent rounded-full animate-spin"></div>

        {/* Text */}
        <p className="mt-4 font-medium">Checking your account...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 px-4 text-center">
      {loading && (
        <div className="w-12 h-12 border-4 border-[#ffd061] border-t-transparent rounded-full animate-spin"></div>
      )}

      {/* TITLE */}
      <h1 className="text-2xl font-bold">
        {isVerified ? "Verification Successful" : "Verify Your Email"}
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-600 max-w-md">
        {isVerified
          ? "Your email has been verified. Your account is under review. You will be redirected shortly."
          : "A verification link has been sent to your email. Please check your inbox and verify your account."}
      </p>

      {/* ACTION BUTTON */}
      {!isVerified && (
        <button
          onClick={handleCheckVerification}
          disabled={loading}
          className="group bg-[#ffd061] hover:bg-[#f5c84a] text-black flex items-center gap-3 px-5 py-2 rounded-md font-semibold"
        >
          {loading ? "Checking..." : "I’ve Verified"}
          <span className="bg-[#383635] p-1 rounded-sm group-hover:rotate-45 transition-transform">
            <FiArrowUpRight className="text-white w-5 h-5" />
          </span>
        </button>
      )}

      {/* RESEND */}
      {!isVerified && (
        <>
          <button
            onClick={handleResendEmail}
            className="text-sm underline hover:text-[#f5c84a]"
          >
            Resend Verification Email
          </button>
          {message && (
            <p className="text-sm font-medium text-red-600 max-w-md">
              {message}
            </p>
          )}
        </>
      )}

      {message && (
        <p
          className={`text-sm font-medium max-w-md ${
            isVerified ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default VerificationPage;
