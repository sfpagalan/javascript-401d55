import React, { createContext, useState } from 'react';

export const ChallengesContext = createContext();

export const ChallengesProvider = ({ children }) => {
  const [completedChallenges, setCompletedChallenges] = useState([]);

  return (
    <ChallengesContext.Provider value={{ completedChallenges, setCompletedChallenges }}>
      {children}
    </ChallengesContext.Provider>
  );
};
