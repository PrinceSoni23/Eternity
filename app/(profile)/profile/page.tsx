"use client";
import React from 'react';
// import SettingsPage from "./Settings";
import Profile from "./_components/Profile";

const ProfilePageComponent = () => {
  return (
<div>
  {/* Main Area */}
  <main className="flex-1 p-3 sm:p-4 md:p-6 lg:p-8 h-full bg-red-100 dark:bg-gray-800 overflow-auto">
    <div className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl text-center mt-4 font-bold">
      Profile Management
    </div>
    <Profile />
  </main>
</div>

  );
};

export default ProfilePageComponent;