"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import { CheckCircleIcon, XCircleIcon } from "lucide-react";

export default function EmailVerification() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [validUrl, setValidUrl] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [res, setRes] = useState<any | null>(null);

  const hasFetched = useRef(false);

useEffect(() => {
  if (hasFetched.current) return; // Prevent multiple executions
  hasFetched.current = true;

  const token = searchParams.get("token");
  if (!token) {
    setValidUrl(false);
    setLoading(false);
    console.log("Token not found in URL");
    return;
  }

  const verifyEmail = async () => {
    try {
      console.log("Token from URL:", token);
      console.log("Backend URL:", process.env.NEXT_PUBLIC_BACKEND_URL);

      const url = `http://localhost:8000/api/v1/companies/verify-email?token=${token}`;
      console.log("Request URL:", url);

      const { data } = await axios.get(url);
      console.log("Verification response:", data);
      setRes(data);
      setValidUrl(true);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error("Email verification failed:", err.response?.data || err.message);
      } else {
        console.error("Email verification failed:", err);
      }
      setValidUrl(false);
    } finally {
      setLoading(false);
    }
  };

  verifyEmail();
}, [searchParams]);

const [timer, setTimer] = useState(5); 

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        if (timer === 0) {
            router.push(
                res?.type === "user"
                    ? `/registration/company_registration`
                    : `/registration/domain_selection/${res?.id}`
            );
        }

        return () => clearInterval(countdown);
    }, [timer, router, res]);


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center w-full max-w-sm sm:max-w-md md:max-w-lg">
        {loading ? (
          <p className="text-gray-500 text-lg">Verifying...</p>
        ) : validUrl ? (
          <>
            <CheckCircleIcon className="w-24 h-24 text-green-500" />
            <h2 className="text-2xl font-semibold text-gray-800 mt-4 text-center">Email Verified</h2>
            <button
              onClick={() => router.push(res?.type === "user" ? `/registration/company_registration` : `/registration/domain_selection/${res?.id}`) }
              className="mt-6 px-6 py-3 bg-green-500 text-white text-lg rounded-lg hover:bg-green-600 transition w-full sm:w-auto"
            >
              Proceed
            </button>

            <div className="text-gray-700 text-sm font-semibold mt-4">
              Redirecting to the Company {res?.type === "user" ? " registration " : " creation "} page in {timer} seconds...
            </div>
          </>
        ) : (
          <>
            <XCircleIcon className="w-24 h-24 text-red-500" />
            <h2 className="text-2xl font-semibold text-red-500 mt-4 text-center">Invalid or Expired Link</h2>
            <button
              onClick={() => router.push(`/user-resend-rmail/${res?.id}`)}
              className="mt-6 px-6 py-3 bg-red-500 text-white text-lg rounded-lg hover:bg-red-600 transition w-full sm:w-auto"
            >
              Resend Verification
            </button>
          </>
        )}
      </div>
    </div>
  );
}
