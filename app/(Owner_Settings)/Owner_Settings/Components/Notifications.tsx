import React, { useState } from "react";
// import { Check, X } from "lucide-react";
import {
  walsheim_light,
  walsheim_regular,
} from "@/components/constants";

interface NotificationItem {
  title: string;
  description: string;
  enabled: boolean;
}

const NotificationManagement: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      title: "Message",
      description: "Allow this permission to send notification for a new message in team",
      enabled: true,
    },
    {
      title: "New Leads",
      description: "Allow this permission to send notification for a new message in team",
      enabled: true,
    },
    {
      title: "Team Meeting",
      description: "Allow this permission to send notification for a new message in team",
      enabled: true,
    },
    {
      title: "Announcements",
      description: "Allow this permission to send notification for a new message in team",
      enabled: false,
    },
  ]);

  const toggleNotification = (index: number) => {
    const updatedNotifications = notifications.map((notification, i) =>
      i === index ? { ...notification, enabled: !notification.enabled } : notification
    );
    setNotifications(updatedNotifications);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8  mx-auto">
      <h1 className={`text-lg -mt-4 font-bold mb-4 ${walsheim_regular.className}`}>Notification Management</h1>
      <div className="space-y-6">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="p-4 border-b last:border-b-0"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-8">
                <h2 className={`text-lg font-bold ${walsheim_regular.className}`}>{notification.title}</h2>
                <button
                  onClick={() => toggleNotification(index)}
                  className={`w-10 h-6 flex items-center rounded-full p-0.5 transition-colors ${
                    notification.enabled ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform flex items-center justify-center ${
                      notification.enabled ? "translate-x-5" : "translate-x-0"
                    }`}
                  >
                  </div>
                </button>
              </div>
            </div>
            <p className={`text-base text-gray-600 dark:text-white mt-1 ${walsheim_light.className}`}>{notification.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationManagement;
