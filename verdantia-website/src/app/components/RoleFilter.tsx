import React, { useState } from 'react';

interface RoleFilterProps {
  onChange: (roles: string[]) => void;
}

const RoleFilter: React.FC<RoleFilterProps> = ({ onChange }) => {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  const handleRoleClick = (role: string) => {
    const updatedRoles = [...selectedRoles];
    const index = updatedRoles.indexOf(role);
    if (index === -1) {
      updatedRoles.push(role);
    } else {
      updatedRoles.splice(index, 1);
    }
    setSelectedRoles(updatedRoles);
    onChange(updatedRoles);
  };

  const roles = ['Coordinator', 'Manager', 'Engineer', 'Scientist', 'Analyst'];

  return (
    <div>
      <h3>Role</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          {roles.slice(0, 3).map(role => (
            <button
              key={role}
              className={`block px-4 py-2 border rounded hover:bg-blue-500 hover:text-white mb-2 w-full ${
                selectedRoles.includes(role) ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => handleRoleClick(role)}
            >
              {role}
            </button>
          ))}
        </div>
        <div>
          {roles.slice(3).map(role => (
            <button
              key={role}
              className={`block px-4 py-2 border rounded hover:bg-blue-500 hover:text-white mb-2 w-full ${
                selectedRoles.includes(role) ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => handleRoleClick(role)}
            >
              {role}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleFilter;