"use client";
import React from "react";

export default function Toasts({ type = "single" }) {
  switch (type) {
    // ===== SINGLE TOAST =====
    case "single":
      return (
        <div
          className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg"
          role="alert"
          tabIndex="-1"
          aria-labelledby="toast-single-label"
        >
          <div className="flex p-4">
            <div className="shrink-0">
              <svg
                className="size-5 text-gray-600 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
              </svg>
            </div>
            <div className="ms-4">
              <h3
                id="toast-single-label"
                className="text-gray-800 font-semibold"
              >
                App notifications
              </h3>
              <div className="mt-1 text-sm text-gray-600">
                Notifications may include alerts, sounds and icon badges.
              </div>
              <div className="mt-4 flex gap-x-3">
                <button className="text-blue-600 font-medium text-sm hover:underline">
                  Don't allow
                </button>
                <button className="text-blue-600 font-medium text-sm hover:underline">
                  Allow
                </button>
              </div>
            </div>
          </div>
        </div>
      );

    // ===== STACKED TOASTS =====
    case "stacked":
      return (
        <div className="space-y-3">
          {/* Toast 1 */}
          <div
            className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg"
            role="alert"
          >
            <div className="flex p-4">
              <div className="shrink-0">
                <svg
                  className="size-5 text-gray-600 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
              </div>
              <div className="ms-4">
                <h3 className="text-gray-800 font-semibold">
                  App notifications
                </h3>
                <div className="mt-1 text-sm text-gray-600">
                  Notifications may include alerts, sounds and icon badges.
                </div>
                <div className="mt-4 flex gap-x-3">
                  <button className="text-blue-600 font-medium text-sm hover:underline">
                    Don't allow
                  </button>
                  <button className="text-blue-600 font-medium text-sm hover:underline">
                    Allow
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Toast 2 */}
          <div
            className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg"
            role="alert"
          >
            <div className="flex p-4">
              <div className="shrink-0">
                <svg
                  className="size-4 text-teal-500 mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>
              </div>
              <div className="ms-3">
                <p className="text-sm text-gray-700">
                  Your app preferences have been successfully updated.
                </p>
              </div>
            </div>
          </div>
        </div>
      );

    // ===== PROGRESS TOAST (Added) =====
    case "progress":
      return (
        <div
          className="max-w-xs relative bg-white border border-gray-200 rounded-xl shadow-lg"
          role="alert"
          tabIndex="-1"
          aria-labelledby="toast-progress-label"
        >
          <div className="flex gap-x-3 p-4">
            <div className="shrink-0">
              <span className="m-1 inline-flex justify-center items-center size-8 rounded-full bg-gray-100 text-gray-800">
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                  <path d="M12 12v9"></path>
                  <path d="m16 16-4-4-4 4"></path>
                </svg>
              </span>

              {/* Close Button */}
              <button
                type="button"
                className="absolute top-3 right-3 inline-flex justify-center items-center size-5 rounded-lg text-gray-800 opacity-50 hover:opacity-100 focus:outline-none"
                aria-label="Close"
              >
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>

            <div className="grow me-5">
              <h3
                id="toast-progress-label"
                className="text-gray-800 font-medium text-sm"
              >
                Uploading 3 files
              </h3>

              <div className="mt-2 flex flex-col gap-x-3">
                <span className="block mb-1.5 text-xs text-gray-500">
                  57% · 5 seconds left
                </span>
                <div
                  className="flex w-full h-1 bg-gray-200 rounded-full overflow-hidden"
                  role="progressbar"
                  aria-valuenow="57"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap"
                    style={{ width: "57%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    // ===== DEFAULT =====
    default:
      return (
        <div className="p-4 bg-gray-100 rounded-lg text-center text-gray-700">
          No toast type selected. Use{" "}
          <code>type="single"</code>, <code>type="stacked"</code> or{" "}
          <code>type="progress"</code>.
        </div>
      );
  }
}
