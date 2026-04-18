"use client";
import DashNav from "@/component/04/dashNav";
import DashSide from "@/component/04/dashSide";
import AuthGuard from "@/lib/authGuard";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-auto text-gray-900">
      <DashSide />
      <main className="w-[86%] md:w-[90%] lg:w-[84%] bg-[#f7f8fa]">
        <DashNav />
        <AuthGuard>{children}</AuthGuard>
      </main>
    </div>
  );
}
