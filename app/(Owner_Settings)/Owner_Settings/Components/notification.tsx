"use client";
import { Avatar, IconButton, MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react';
import { Menu } from 'lucide-react';
import React, { ReactNode } from 'react';
import Image from 'next/image';

const notifications = [
    {
      id: 1,
      name: 'Tania send you a message',
      time: '13 minutes ago',
      description:"A list of new leads has been added to your dashboard",
      avatar: '/icons/notification1.png',
    },
    {
      id: 2,
      name: 'Natali replied to your email.',
      time: '1 hour ago',
      description:"A list of new leads has been added to your dashboard",
      avatar: '/icons/notification2.png',
    },
    {
      id: 3,
      name: "You've received a payment.",
      time: '5 hours ago',
      description:"A list of new leads has been added to your dashboard",
      avatar: '/icons/notification1.png',
    },
    {
      id: 4,
      name: "You've received a payment.",
      time: '6 hours ago',
      description:"A list of new leads has been added to your dashboard",
      avatar: '/icons/notification1.png',
    },
    {
      id: 5,
      name: "You've received a payment.",
      time: '8 hours ago',
      description:"A list of new leads has been added to your dashboard",
      avatar: '/icons/notification2.png',
    },

  ];

const notification = () => {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return (
    <Menu
    animate={{
      mount: { y: 0 },
      unmount: { y: 25 },
    }}
  >
    <MenuHandler>
      <IconButton variant="text" placeholder="">
        <Image
         src={isDarkMode ? "/icons/notification-icon-dark.svg" : "/icons/notification-icon.svg"}
          alt="Notifications"
          className="w-5 h-5"
        />
      </IconButton>
    </MenuHandler>
    <MenuList
      className="flex flex-col sm:w-4/12 bg-white dark:bg-black sm:-ml-32  "
      placeholder=""
    >
      {notifications.map(
        (notification: {
          description: ReactNode;
          id: React.Key | null | undefined;
          name:
            | string
            | number
            | bigint
            | boolean
            | React.ReactElement<
                unknown,
                string | React.JSXElementConstructor<any>
              >
            | Iterable<React.ReactNode>
            | Promise<
                | string
                | number
                | bigint
                | boolean
                | React.ReactPortal
                | React.ReactElement<
                    unknown,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | null
                | undefined
              >
            | null
            | undefined;
          avatar: string | undefined;
          time:
            | string
            | number
            | bigint
            | boolean
            | React.ReactElement<
                unknown,
                string | React.JSXElementConstructor<any>
              >
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | Promise<
                | string
                | number
                | bigint
                | boolean
                | React.ReactPortal
                | React.ReactElement<
                    unknown,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | null
                | undefined
              >
            | null
            | undefined;
        }) => (
          <MenuItem
            key={notification.id}
            className="flex items-center gap-4 py-2 pl-2 pr-8"
            placeholder=""
          >
            <Avatar
              variant="circular"
              alt={notification.name as string | undefined}
              src={notification.avatar as string | undefined}
              placeholder={undefined}
            />
            <div className="flex flex-col gap-1">
              <Typography
                variant="small"
                color="gray"
                placeholder=""
                className={`text-black dark:text-white ${walsheim_medium.className}`}
              >
                {notification.name}
                {"  "}{" "}
                <span
                  className={`text-xs dark:text-gray-300 text-gray-500 ${walsheim_regular.className}`}
                >
                  {notification.time}
                </span>
              </Typography>
              <span
                className={`text-gray-700 dark:text-white text-xs ${walsheim_light.className}`}
              >
                {notification.description}
              </span>
            </div>
          </MenuItem>
        )
      )}
    </MenuList>
  </Menu>

  )
}

export default notification;