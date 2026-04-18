import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const handleAuthRedirect = async (user, router, delay = 4000) => {
  const start = Date.now();

  // get Firestore user
  const userRef = doc(db, "users", user.uid);
  const snap = await getDoc(userRef);

  const isApproved = snap.exists() ? snap.data().isApproved : false;
  const emailVerified = user.emailVerified;

  // enforce minimum loading time (3–4 sec)
  const elapsed = Date.now() - start;
  if (elapsed < delay) {
    await new Promise((res) => setTimeout(res, delay - elapsed));
  }

  // FINAL ROUTING LOGIC
  if (!emailVerified || !isApproved) {
    router.replace("/verification");
  } else {
    router.replace("/dash_board");
  }
};