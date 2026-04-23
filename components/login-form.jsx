"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input, PasswordInput } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Loading from "@/lib/loading";
import { handleAuthRedirect } from "@/lib/authRedirect";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { FiArrowUpRight } from "react-icons/fi";

export function LoginForm({ className, ...props }) {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);

  // ADDED: form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // ADDED: loading + error state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ADDED: handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  // login with email and password
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const startTime = Date.now();

    try {
      let userCredential;

      if (isSignUp) {
        // CREATE USER WITH FIREBASE
        userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password,
        );

        const user = userCredential.user;

        // SEND EMAIL VERIFICATION
        await sendEmailVerification(user);

        // CHECK IF USER DOC ALREADY EXISTS
        const userRef = doc(db, "users", user.uid);
        await setDoc(userRef, {
          name: formData.name,
          email: formData.email,
          role: "user",
          status: "pending",
          isApproved: false,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      } else {
        // LOGIN USER
        userCredential = await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password,
        );
      }

      const user = userCredential.user;

      // Reload to get latest verification status
      await user.reload();

      await handleAuthRedirect(user, router);

      // Reset form
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    } catch (err) {
      const elapsed = Date.now() - startTime;
      if (elapsed < 4000) {
        await delay(4000 - elapsed);
      }

      // Clean Firebase error messages
      let message = "An unexpected error occurred. Please try again.";

      // Firebase-specific errors
      const firebaseErrors = {
        "auth/email-already-in-use":
          "This email is already registered. Please log in instead.",
        "auth/invalid-email": "Please enter a valid email address.",
        "auth/weak-password":
          "Your password must be at least 6 characters long.",
        "auth/user-not-found": "No account found with this email.",
        "auth/invalid-credential": "Invalid Credentials. Please try again.",
        "auth/network-request-failed":
          "Network error. Check your internet connection and try again.",
        "auth/too-many-requests":
          "Too many attempts. Please wait a moment and try again.",
        "auth/user-disabled":
          "This account has been disabled. Contact support.",
      };

      // Use mapped message if exists
      if (firebaseErrors[err.code]) {
        message = firebaseErrors[err.code];
      }
      // If Firebase gives a message, clean it and show it
      else if (err.message) {
        message = err.message
          .replace("Firebase: Error (", "")
          .replace(").", "");
      }

      setError(message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // login with google
  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      const userRef = doc(db, "users", user.uid);
      const snap = await getDoc(userRef);

      // create user if not exists
      if (!snap.exists()) {
        await setDoc(userRef, {
          name: user.displayName || "Google User",
          email: user.email,
          role: "user",
          status: "active",
          isApproved: true,
          createdAt: new Date().toISOString(),
        });
      }

      await handleAuthRedirect(user, router);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col", className)} {...props}>
      {loading && <Loading isSignUp={isSignUp} />}
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2 bg-gray-100">
          {/* UPDATED: added onSubmit */}
          <form className="p-6 md:p-8" onSubmit={handleSubmit}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">
                  {isSignUp ? "Create an account" : "Welcome back"}
                </h1>
                <p className="text-balance text-muted-foreground">
                  {isSignUp
                    ? "Sign up to get started"
                    : "Login to your account"}
                </p>
              </div>

              {error && <div className="text-red-500 text-sm">{error}</div>}

              {/* SIGN UP FIELD */}
              {isSignUp && (
                <Field>
                  <FieldLabel htmlFor="name">Full Name</FieldLabel>
                  <Input
                    id="name"
                    type="text"
                    placeholder="eg.Chris Mac"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Field>
              )}

              {/* EMAIL */}
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Field>

              {/* PASSWORD */}
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  {!isSignUp && (
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-2 hover:text-[#f5c84a]"
                    >
                      Forgot your password?
                    </a>
                  )}
                </div>
                <PasswordInput
                  id="password"
                  placeholder="********"
                  className="items-center"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Field>

              {/* SUBMIT BUTTON */}
              <Field>
                <div className="group flex justify-center sm:justify-start">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="group/btn bg-[#ffd061] shadow hover:bg-[#f5c84a] gap-5 cursor-pointer text-black flex items-center justify-center px-4 sm:px-5 py-4 w-full rounded-md font-semibold text-sm sm:text-base transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading
                      ? "Please wait..."
                      : isSignUp
                        ? "Sign Up"
                        : "Login"}

                    <span className="bg-[#383635] inline-block p-1 rounded-sm group-hover/btn:rotate-45 transition-transform duration-300">
                      <FiArrowUpRight className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                  </Button>
                </div>
              </Field>

              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-gray-100 *:data-[slot=field-separator-content]:px-3 *:data-[slot=field-separator-content]:py-1 *:data-[slot=field-separator-content]:rounded-full">
                Or continue with
              </FieldSeparator>

              {/* SOCIAL BUTTONS (UNCHANGED) */}
              <Field className="grid grid-cols-3 gap-4">
                <Button
                  variant="outline"
                  type="button"
                  className="cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="sr-only">Login with Apple</span>
                </Button>

                <Button
                  variant="outline"
                  type="button"
                  className="cursor-pointer"
                  onClick={handleGoogleLogin}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="sr-only">Login with Google</span>
                </Button>

                <Button
                  variant="outline"
                  type="button"
                  className="cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="sr-only">Login with Meta</span>
                </Button>
              </Field>

              {/* TOGGLE LOGIN/SIGNUP */}
              <FieldDescription className="text-center">
                {isSignUp ? (
                  <>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsSignUp(false)}
                      className="hover:text-[#f5c84a] cursor-pointer"
                    >
                      Login
                    </button>
                  </>
                ) : (
                  <>
                    Don&apos;t have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setIsSignUp(true)}
                      className="hover:text-[#f5c84a] cursor-pointer"
                    >
                      Sign up
                    </button>
                  </>
                )}
              </FieldDescription>
            </FieldGroup>
          </form>

          {/* IMAGE SIDE */}
          <div className="relative hidden bg-black md:block overflow-hidden">
            <img
              src="assert/jenga_nasi_logo.png"
              alt="Image"
              className="absolute inset-0 h-full w-full object-contain object-center"
            />
          </div>
        </CardContent>
      </Card>

      <FieldDescription className="px-6 py-5 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
