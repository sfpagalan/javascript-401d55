
const themedChallenges = {
    luffy: [
        { id: 1, activity: 'Climb 100 steps', type: 'Endurance' },
        { id: 2, activity: '100 Push-ups', type: 'Strength' },
        { id: 3, activity: '100 Sit-ups', type: 'Strength' },
        { id: 4, activity: '100 Squats', type: 'Strength' },
        { id: 5, activity: 'Run 5 miles', type: 'Endurance' },
        { id: 6, activity: '100 Burpees', type: 'Strength' },
        { id: 7, activity: '100 Pull-ups', type: 'Strength' },
        { id: 8, activity: '100 Dips', type: 'Strength' },
        { id: 9, activity: '100 Crunches', type: 'Strength' },
        { id: 10, activity: '100 Jumping Jacks', type: 'Endurance'}
      ],
      saitama: [
        { id: 1, activity: '100 Push-ups', type: 'Strength' },
        { id: 2, activity: '100 Sit-ups', type: 'Strength' },
        { id: 3, activity: '100 Squats', type: 'Strength' },
        { id: 4, activity: 'Run 5 miles', type: 'Endurance' },
        { id: 5, activity: '100 Burpees', type: 'Strength' },
        { id: 6, activity: '100 Pull-ups', type: 'Strength' },
        { id: 7, activity: '100 Dips', type: 'Strength' },
        { id: 8, activity: '100 Crunches', type: 'Strength' },
        { id: 9, activity: '100 Jumping Jacks', type: 'Endurance' },
        { id: 10, activity: '1000 m', type: 'Endurance'}
      ],
}

// export const getThemedChallenges = (theme) => {
//     return themedChallenges[theme] || [];
// };

export const getThreeRandomChallenges = (theme) => {
    if (!themedChallenges[theme]) return [];
  
    const shuffled = [...themedChallenges[theme]].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
};
  
export const trackChallengeProgress = (challengeId, completed) => {
    console.log(`Challenge ${challengeId} completed: ${completed}`);
};
