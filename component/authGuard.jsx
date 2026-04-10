"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";

const AuthGuard = ({ children }) => {
  const [checkingUser, setCheckingUser] = useState(true);
  const router = useRouter();

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    const startTime = Date.now();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        // Ensure minimum 5 seconds loading
        const elapsed = Date.now() - startTime;
        const remaining = 4000 - elapsed;
        if (remaining > 0) await delay(remaining);

        // No user
        if (!user) {
          router.push("/login");
          return;
        }

        // Reload user to get latest verification state
        await user.reload();

        // Email not verified
        if (!user.emailVerified) {
          router.push("/verification");
          return;
        }

        // Fetch Firestore approval
        const userDocRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userDocRef);

        if (!userSnap.exists()) {
          router.push("/login");
          return;
        }

        const userData = userSnap.data();

        // Not approved
        if (userData?.isApproved !== true) {
          router.push("/verification");
          return;
        }

        // All good
        setCheckingUser(false);
      } catch (error) {
        console.error("AuthGuard error:", error);
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  // PROFESSIONAL LOADING SCREEN
  if (checkingUser) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-[#ffd061]/30 rounded-full"></div>
          <div className="w-16 h-16 border-4 border-[#ffd061] border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
        </div>

        <p className="mt-6 text-lg font-semibold text-gray-800">Checking</p>

        <p className="text-sm text-gray-500 mt-1">
          Please wait while we checking your session...
        </p>
      </div>
    );
  }

  return children;
};

export default AuthGuard;
