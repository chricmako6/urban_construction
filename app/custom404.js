"use client";

import Link from "next/link";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold text-red-600 mb-4">
        404 - Page Not Found
      </h1>

      <p className="text-gray-600 mb-6">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
export default NotFound