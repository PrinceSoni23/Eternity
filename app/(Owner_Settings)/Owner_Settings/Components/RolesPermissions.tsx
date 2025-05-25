"use client";

import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Switch from "./Switch";
import {
  walsheim_medium,
  walsheim_regular,
  walsheim_thin
} from "@/components/constants";
import type { DropResult } from 'react-beautiful-dnd';

const rolesData = [
  { id: "1", name: "CEO", color: "bg-red-500" },
  { id: "2", name: "CTO", color: "bg-purple-500" },
  { id: "3", name: "COO", color: "bg-indigo-500" },
  { id: "4", name: "Admin Team 1", color: "bg-blue-500" },
  { id: "5", name: "Admin Team 2", color: "bg-blue-400" },
  { id: "6", name: "Team 1", color: "bg-green-500" },
  { id: "7", name: "Team 2", color: "bg-yellow-500" },
  { id: "8", name: "Team 3", color: "bg-orange-500" },
];

const permissionsData = {
  "1": { "Create Role": true, "Manage Teams": true, "Send Message": true, "Administrator": false },
  "2": { "Create Role": false, "Manage Teams": true, "Send Message": true, "Administrator": false },
  "3": { "Create Role": true, "Manage Teams": false, "Send Message": true, "Administrator": false },
  "4": { "Create Role": false, "Manage Teams": false, "Send Message": true, "Administrator": true },
  "5": { "Create Role": true, "Manage Teams": true, "Send Message": false, "Administrator": false },
  "6": { "Create Role": false, "Manage Teams": true, "Send Message": false, "Administrator": false },
  "7": { "Create Role": true, "Manage Teams": false, "Send Message": true, "Administrator": true },
  "8": { "Create Role": false, "Manage Teams": false, "Send Message": false, "Administrator": true },
};

const permissionMessages: Record<string, string> = {
  "Create Role": "Allow this role to create more roles and manage their Permission",
  "Manage Teams": "Allow this role to create more roles and manage their Permission",
  "Send Message": "Allow this role to create more roles and manage their Permission",
  "Administrator": "Allow this role to create more roles and manage their Permission",
};

type Role = {
  id: string;
  name: string;
  color: string;
};

export default function RolesPermissions() {
  const [roles, setRoles] = useState<Role[]>(rolesData);
  const [selectedRole, setSelectedRole] = useState<string>(roles[0].id);
  const [permissions, setPermissions] = useState<Record<string, Record<string, boolean>>>(permissionsData);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(roles);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setRoles(items);
  };

  const togglePermission = (permission: string) => {
    setPermissions((prev) => ({
      ...prev,
      [selectedRole]: {
        ...prev[selectedRole],
        [permission]: !prev[selectedRole][permission],
      },
    }));
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 p-2 dark:bg-gray-800 rounded-xl w-full max-w-6xl mx-auto">
      {/* Roles Section */}
      <div className="w-full md:w-1/3 bg-white dark:bg-black p-4 rounded-lg shadow-md">
        <h2 className={`font-semibold -mt-2 text-lg mb-8 ${walsheim_medium.className}`}>Roles & Permissions</h2>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="rolesList">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
                {roles.map((role, index) => (
                  <Draggable key={role.id} draggableId={role.id} index={index}>
                    {(provided) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        onClick={() => setSelectedRole(role.id)}
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                          selectedRole === role.id ? "bg-[#E7E5FF] dark:bg-gray-800 border-l-4 border-blue-500" : "bg-transparent"
                        } hover:bg-[#E7E5FF] dark:hover:bg-gray-600`}
                      >
                        {/* Dots Container */}
                        <div className="grid grid-cols-2 gap-0.5">
                          {[...Array(6)].map((_, i) => (
                            <span key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500"></span>
                          ))}
                        </div>
                        
                        {/* Role Indicator */}
                        <span className={`w-3 h-3 rounded-full ${role.color}`}></span>

                        {/* Role Name */}
                        <span className={`flex-1 font-bold text-gray-700 dark:text-white ${walsheim_medium.className}`}>{role.name}</span>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>

      {/* Permissions Section */}
      <div className="w-full md:w-2/3 bg-white dark:bg-black p-6 space-y-4 rounded-lg shadow-md">
        <h2 className={`font-semibold dark:text-white text-lg mb-4 ${walsheim_medium.className}`}></h2>
        {Object.keys(permissions[selectedRole]).map((permission) => (
          <div
            key={permission}
            className="flex flex-col md:flex-row justify-between items-center p-4 space-y-4 md:space-y-0 md:space-x-6 hover:bg-blue-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-150"
          >
            <div>
              <h3 className={`font-bold dark:text-white text-gray-900 ${walsheim_regular.className}`}>{permission}</h3>
              <p className={`text-m font-semibold text-gray-500 ${walsheim_thin.className}`}>
                {permissionMessages[permission] || "Customize this permission for the selected role."}
              </p>
            </div>
            <Switch checked={permissions[selectedRole][permission]} onCheckedChange={() => togglePermission(permission)} />
          </div>
        ))}
      </div>
    </div>
  );
}
