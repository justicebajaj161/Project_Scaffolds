import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 
    if (window.Cypress) {
      window.setIsAuthenticated = setIsAuthenticated;
  }

  return (

  );
};


