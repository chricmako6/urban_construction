// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { onAuthStateChanged } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";

// function AuthGuard({ children }) {
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged( async (user) => {
//       if (!user) {
//         router.push("/login");
//         return;
//       }

//       // Reload user to get latest emailVerified status
//       await user.reload();

//       // Check Firestore user document
//       const userRef = doc(db, "users", user.uid);
//       const userSnap = await getDoc(userRef);

//       // If user document does NOT exist
//       if (!userSnap.exists()) {
//         router.push("/login");
//         return;
//       }

//       const userData = userSnap.data();

//       // Check email verification (from Firestore OR Firebase)
//       if (!user.emailVerified || userData.emailVerified === false) {
//         router.push("/verification");
//         return;
//       }

//       // If verified → go to dashboard
//       router.push("/dashboard");

//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, [router]);

//   // Optional: prevent flashing content
//   if (loading) return null;

//   return children;
// }

// export default AuthGuard;