'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from './types';
import { mockUsers } from './mockData';

interface AuthContextType {
  currentUser: User | null;
  role: UserRole;
  setRole: (role: UserRole) => void;
  loginAs: (role: UserRole) => void;
  logout: () => void;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(mockUsers[0]); // Default to Super Admin for full preview
  const [role, setRoleState] = useState<UserRole>('super_admin');

  const setRole = (newRole: UserRole) => {
    const foundUser = mockUsers.find(u => u.role === newRole) || {
      id: `user-${newRole}`,
      name: `${newRole.toUpperCase()} User`,
      email: `${newRole}@planaid.edu`,
      role: newRole,
    };
    setCurrentUser(foundUser);
    setRoleState(newRole);
  };

  const loginAs = (targetRole: UserRole) => {
    setRole(targetRole);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        role: currentUser ? currentUser.role : role,
        setRole,
        loginAs,
        logout,
        isLoggedIn: !!currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
