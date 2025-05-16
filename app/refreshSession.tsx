"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "@/lib/store/features/auth/userSlice";

const refreshSession = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const restoreSession = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/v1/users/refresh-tokens", {
          method: "POST",
          credentials: "include",
        });

        if (res.ok) {
          const data = await res.json();
          console.log("✅ Restored session:", data);
          if (data) {
            dispatch(
              setUserData({
                user: data?.user,
                accessToken: data?.newAccessToken,
                refreshToken: data?.user?.refreshTokens?.[0],
              })
            );
          }
        }
      } catch (err) {
        console.log("❌ Session expired or not logged in.");
      }
    };

    restoreSession();
  }, [dispatch]);

  return null;
};

export default refreshSession;  
