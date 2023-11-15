import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import { getThreeRandomChallenges } from '../utility/challenges';

export default function ChallengeScreen({ route, navigation }) {
  const [selectedTheme, setSelectedTheme] = useState(route.params?.theme || null);
  const [challenges, setChallenges] = useState(getThreeRandomChallenges(selectedTheme));
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [userAchievement, setUserAchievement] = useState({});

  const refreshChallenges = () => {
    setChallenges(getThreeRandomChallenges(selectedTheme));
  };

  const completeChallenge = (challengeId) => {
    const completedChallenge = challenges.find(challenge => challenge.id === challengeId);
    if (completedChallenge) {
      completedChallenge.userAchievement = userAchievement[challengeId] || 0;
      setCompletedChallenges([...completedChallenges, completedChallenge]);
      refreshChallenges();
    }
  };

  const onAchievementChange = (challengeId, achievement) => {
    setUserAchievement({ ...userAchievement, [challengeId]: achievement });
  };

  const navigateToProgress = () => {
    navigation.navigate('Progress', { completedChallenges: completedChallenges });
  };

  return (
    <ScrollView style={styles.container}>
      {!selectedTheme ? (
        <View style={styles.themeSelection}>
          <Text style={styles.header}>Select a Challenge Theme:</Text>
          <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={() => setSelectedTheme('Luffy')}>
            <Text style={styles.buttonText}>Luffy: King of the Pirates Challenge</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={() => setSelectedTheme('Saitama')}>
            <Text style={styles.buttonText}>Saitama: One Punch Man Challenge</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={styles.challengeHeader}>{selectedTheme} Challenge:</Text>
          {challenges.map((challenge) => (
            <View key={challenge.id} style={styles.challengeCard}>
              <Text style={styles.activityText}>{challenge.activity}</Text>
              <TextInput
                style={styles.input}
                placeholder="Achieved Reps"
                onChangeText={(text) => onAchievementChange(challenge.id, text)}
                keyboardType="numeric"
              />
              <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={() => completeChallenge(challenge.id)}>
                <Text style={styles.buttonText}>Complete</Text>
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={refreshChallenges}>
            <Text style={styles.buttonText}>Refresh Challenges</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={navigateToProgress}>
            <Text style={styles.buttonText}>View Progress</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f8ff',
    },
    themeSelection: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#E63946',
        marginBottom: 20,
        textAlign: 'center',
    },
    challengeHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#457B9D',
        marginBottom: 15,
        textAlign: 'center',
    },
    challengeCard: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 10,
    },
    activityText: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#1D3557',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    buttonContainer: {
        backgroundColor: '#2A9D8F',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginVertical: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});