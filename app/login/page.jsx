import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div
      className="relative flex min-h-svh flex-col items-center justify-center p-6 md:p-10"
      style={{ 
        backgroundImage: "url('assert/jenganasi_login_background.jpg')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Optional: Add overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative w-full max-w-sm md:max-w-4xl bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg z-10">
        <LoginForm />
      </div>
    </div>
  );
}
