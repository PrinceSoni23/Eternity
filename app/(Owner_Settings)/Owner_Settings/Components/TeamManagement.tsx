import React, { useState } from "react";
import { PlusCircle, Edit, Trash } from "lucide-react";
import { walsheim_bold } from "@/components/constants";
import Image from "next/image";

type Member = {
  id: number;
  name: string;
  roles: string[];
};

type Team = {
  id: number;
  name: string;
  members: Member[];
};

const initialPredefinedRoles = ["CEO", "COO", "CTO", "Admin Team 1", "Admin Team 2"];
const roleColors: { [key: string]: string } = {
  "CEO": "bg-[#FF3D3F]",
  "COO": "bg-[#FF3DD2]",
  "CTO": "bg-[#843DFF]",
  "Admin Team 1": "bg-[#3D87FF]",
  "Admin Team 2": "bg-[#3D87FF]",
  "Default": "bg-[#61BA50]"
};

const predefinedEmployees = [
  "Krishna Rajput", "Narayan Tripathi", "Prince Soni", "Gautam Arora", "Kamal Nayan Tripathi"
];

const TeamManagement: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([
    {
      id: 1,
      name: "Team 1",
      members: [
        {
          id: 1,
          name: "Krishna Rajput",
          roles: ["CEO", "COO", "CTO"],
        },
        {
          id: 2,
          name: "Krishna Rajput",
          roles: ["Admin Team 2"],
        },
      ],
    },
    {
      id: 2,
      name: "Team 2",
      members: [
        {
          id: 3,
          name: "Krishna Rajput",
          roles: ["CEO", "Admin Team 1"],
        },
      ],
    },
  ]);

  const [predefinedRoles] = useState<string[]>([...initialPredefinedRoles]);
  const [showAddEmployeeDialog, setShowAddEmployeeDialog] = useState(false);
  // const [selectedEmployee, setSelectedEmployee] = useState<string | null>(null);
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);
  const [showRoleDialog, setShowRoleDialog] = useState(false);
  const [selectedMember, setSelectedMember] = useState<{ memberId: number; teamId: number } | null>(null);
  const [customRole, setCustomRole] = useState("");
  const [newMemberName, setNewMemberName] = useState("");
  const [customRoles, setCustomRoles] = useState<string[]>([]);
  const [membersList, setMembersList] = useState<string[]>([...predefinedEmployees]);

  // Add new team
  const handleAddTeam = () => {
    const newTeam: Team = {
      id: Date.now(), // Generating a unique ID for the new team
      name: `Team ${teams.length + 1}`,
      members: [],
    };
    setTeams((prevTeams) => [...prevTeams, newTeam]);
  };

  // Remove team
  const handleDeleteTeam = (teamId: number) => {
    setTeams((prevTeams) => {
      const filteredTeams = prevTeams.filter((team) => team.id !== teamId);
      return filteredTeams.map((team, index) => ({
        ...team,
        name: `Team ${index + 1}`,
      }));
    });
  };

  // Add Employee to the team
  const handleAddEmployeeToTeam = (employeeName: string) => {
    if (selectedTeamId === null) return;

    const newMember = {
      id: Date.now(), // A simple way to create a unique ID for the new member
      name: employeeName,
      roles: [],
    };
    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team.id === selectedTeamId
          ? { ...team, members: [...team.members, newMember] }
          : team
      )
    );
    setShowAddEmployeeDialog(false);
  };

  // Handle role addition
  const handleAddRole = (memberId: number, teamId: number, role: string) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team.id === teamId
          ? {
              ...team,
              members: team.members.map((member) =>
                member.id === memberId && !member.roles.includes(role)
                  ? { ...member, roles: [...member.roles, role] }
                  : member
              ),
            }
          : team
      )
    );
  };

  // Handle role removal
  const handleRemoveRole = (memberId: number, teamId: number, role: string) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team.id === teamId
          ? {
              ...team,
              members: team.members.map((member) =>
                member.id === memberId
                  ? {
                      ...member,
                      roles: member.roles.filter((r) => r !== role),
                    }
                  : member
              ),
            }
          : team
      )
    );
  };

  // Handle team member removal
  const handleDeleteMember = (memberId: number, teamId: number) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team.id === teamId
          ? {
              ...team,
              members: team.members.filter((member) => member.id !== memberId),
            }
          : team
      )
    );
  };

  // Handle custom role deletion
  const handleDeleteCustomRole = (role: string) => {
    setCustomRoles((prevRoles) => prevRoles.filter((r) => r !== role));
    setTeams((prevTeams) =>
      prevTeams.map((team) => ({
        ...team,
        members: team.members.map((member) => ({
          ...member,
          roles: member.roles.filter((r) => r !== role),
        })),
      }))
    );
  };

  // Handle role checkbox toggling
  const handleToggleRole = (role: string) => {
    if (selectedMember) {
      const member = teams
        .find((team) => team.id === selectedMember.teamId)
        ?.members.find((m) => m.id === selectedMember.memberId);

      if (member) {
        if (member.roles.includes(role)) {
          handleRemoveRole(selectedMember.memberId, selectedMember.teamId, role);
        } else {
          handleAddRole(selectedMember.memberId, selectedMember.teamId, role);
        }
      }
    }
  };

  // Add new custom role
  const handleAddCustomRole = () => {
    if (customRole) {
      setCustomRoles((prevRoles) => [...prevRoles, customRole]);
      setCustomRole("");
    }
  };

  // Add new member name to members list
  const handleAddNewMemberName = () => {
    if (newMemberName) {
      setMembersList((prevList) => [...prevList, newMemberName]);
      setNewMemberName(""); // Clear the input field
    }
  };

  // Delete member name from the members list
  const handleDeleteMemberName = (name: string) => {
    setMembersList((prevList) => prevList.filter((member) => member !== name));
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-slate-800 min-h-screen">
      <div className="flex flex-wrap justify-between items-center mb-8">
        <h1 className={`text-3xl font-${walsheim_bold.className} text-gray-800 dark:text-white text-center sm:text-left w-full sm:w-auto`}>Team Management</h1>
        <div className="flex flex-wrap gap-4 items-center mt-4 sm:mt-0 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search Employee"
            className="w-full sm:w-64 p-1 border border-gray-300 dark:bg-slate-600 rounded-lg"
          />
          <button
            onClick={() => setShowAddEmployeeDialog(true)}
            className="bg-[#652F92] text-white px-4 py-1 rounded-lg hover:bg-purple-700 font-medium w-full sm:w-auto"
          >
            Add Employee
          </button>
          <button
            onClick={handleAddTeam}
            className="bg-[#652F92] text-white px-4 py-1 rounded-lg hover:bg-purple-700 font-medium w-full sm:w-auto"
          >
            Create Team
          </button>
        </div>
      </div>

      {teams.map((team) => (
        <div key={team.id} className="mb-4">
          <h2 className="text-md font-semibold dark:bg-black bg-[#652F92] text-white py-1 px-4 rounded-t-lg flex justify-between items-center">
            {team.name}
            <button
              onClick={() => handleDeleteTeam(team.id)}
              className="text-white"
            >
              <Trash className="w-5 h-5" />
            </button>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 dark:bg-slate-700 bg-white p-6 rounded-b-lg shadow-md">
            {team.members.map((member) => (
              <div
                key={member.id}
                className="bg-[#4A3E6B] dark:bg-slate-900 text-white p-1 rounded-lg shadow-lg relative"
              >
                <div className="flex justify-between items-center mb-4">
                  <button className="absolute top-2 left-2">
                    <Edit className="w-5 h-5" />
                  </button>
                  <div className="w-12 h-12 bg-white rounded-full mx-auto border-2 border-white">
                    <Image
                      src={`/team-member-icon.png`}
                      alt="Profile"
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                  <button
                    className="absolute top-2 right-2"
                    onClick={() => handleDeleteMember(member.id, team.id)}
                  >
                    <Trash className="w-5 h-5" />
                  </button>
                </div>
                <h3 className="text-lg font-bold text-center">{member.name}</h3>
                <p className="text-center text-sm mt-2">Roles</p>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {member.roles.map((role, index) => (
                    <span
                      key={index}
                      className={`px-3 py-2 rounded-full text-xs shadow-md ${roleColors[role] || roleColors.Default}`}
                    >
                      {role}
                    </span>
                  ))}
                  <button
                    onClick={() => {
                      setSelectedMember({ memberId: member.id, teamId: team.id });
                      setShowRoleDialog(true);
                    }}
                    className="flex items-center justify-center bg-white text-black w-8 h-8 rounded-full hover:bg-gray-500"
                  >
                    <PlusCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {showAddEmployeeDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-black rounded-lg p-6 w-full sm:w-80 shadow-lg">
            <h3 className="text-lg font-bold mb-4">Select an Employee to Add</h3>
            <div className="mb-4 dark:bg-black">
              <label htmlFor="teamSelect" className="block dark:text-white mb-2 text-sm">Select Team</label>
              <select
                id="teamSelect"
                className="w-full p-2 border border-gray-300 dark:text-white dark:bg-black rounded"
                value={selectedTeamId || ""}
                onChange={(e) => setSelectedTeamId(Number(e.target.value))}
              >
                <option value="">Choose a Team</option>
                {teams.map((team) => (
                  <option key={team.id} value={team.id}>{team.name}</option>
                ))}
              </select>
            </div>
            <ul className="space-y-4">
              {membersList.map((employee, index) => (
                <li
                  key={index}
                  className="cursor-pointer text-black dark:text-white hover:text-violet-500 dark:hover:text-violet-500"
                  onClick={() => handleAddEmployeeToTeam(employee)}
                >
                  {employee}
                  <button
                    onClick={() => handleDeleteMemberName(employee)}
                    className="ml-4 text-red-600"
                  >
                    <Trash className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <input
                type="text"
                placeholder="New Member Name"
                className="w-full p-2 border border-gray-300 dark:bg-slate-600 dark:text-white rounded"
                value={newMemberName}
                onChange={(e) => setNewMemberName(e.target.value)}
              />
              <button
                onClick={handleAddNewMemberName}
                className="mt-2 bg-violet-500 text-white px-4 py-2 rounded-lg"
              >
                Add New Member
              </button>
            </div>
            <button
              onClick={() => setShowAddEmployeeDialog(false)}
              className="mt-4 bg-violet-500 dark:text-white text-white px-4 py-2 rounded-lg "
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {showRoleDialog && selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-black rounded-lg p-6 w-full sm:w-80 shadow-lg">
            <h3 className="text-lg font-bold mb-4">Customize Roles </h3>
            <ul className="space-y-4">
              {predefinedRoles.map((role, index) => (
                <li key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={teams
                      .find((team) => team.id === selectedMember.teamId)
                      ?.members.find((m) => m.id === selectedMember.memberId)
                      ?.roles.includes(role) || false}
                    onChange={() => handleToggleRole(role)}
                    className="mr-2"
                  />
                  {role}
                </li>
              ))}
              {customRoles.map((role, index) => (
                <li key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={teams
                      .find((team) => team.id === selectedMember.teamId)
                      ?.members.find((m) => m.id === selectedMember.memberId)
                      ?.roles.includes(role) || false}
                    onChange={() => handleToggleRole(role)}
                    className="mr-2"
                  />
                  {role}
                  <button
                    onClick={() => handleDeleteCustomRole(role)}
                    className="ml-2 text-red-600"
                  >
                    <Trash className="w-4 h-4" />
                  </button>
                </li>
              ))}
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Custom Role"
                  className="w-full p-2 border border-gray-300 dark:bg-white dark:text-black rounded"
                  value={customRole}
                  onChange={(e) => setCustomRole(e.target.value)}
                />
                <button
                  onClick={handleAddCustomRole}
                  className="mt-2 bg-violet-500 text-white px-4 py-2 rounded-lg"
                >
                  Add Custom Role
                </button>
              </div>
            </ul>
            <button
              onClick={() => setShowRoleDialog(false)}
              className="mt-4 bg-violet-500 dark:text-white text-white px-4 py-2 rounded-lg "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamManagement;
