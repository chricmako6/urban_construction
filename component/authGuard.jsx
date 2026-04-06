"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

function AuthGuard({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/login");
        return;
      }

      // Reload user to get latest emailVerified status
      await user.reload();

      // Check Firestore user document
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      // If user document does NOT exist
      if (!userSnap.exists()) {
        router.push("/login");
        return;
      }

      const userData = userSnap.data();

      // Check email verification (from Firestore OR Firebase)
      if (!user.emailVerified || userData.emailVerified === false) {
        router.push("/verification");
        return;
      }

     // Allow access instead of forcing redirect
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  // Optional: prevent flashing content
 if (loading) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-12 h-12 border-4 border-[#ffd061] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

  return children;
}

export default AuthGuard;
