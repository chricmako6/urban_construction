import React,{} from "react";

function Loading({ isSignUp }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center bg-black/60 backdrop-blur-sm justify-center animate-fade">
      <div className="flex flex-col items-center gap-4">
        <div className="w-14 h-14 border-4 border-[#f5c84a]  border-t-transparent rounded-full animate-spin"></div>
        <p className="text-white text-sm tracking-wide font-bold">
          {isSignUp ? "Creating account..." : "Logging you in..."}
        </p>
      </div>
    </div>
  );
}

export default Loading;
