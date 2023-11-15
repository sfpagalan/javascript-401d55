import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProgressBar({ completedChallenges }) {
    return (
      <View style={styles.container}>
        <Text>Progress:</Text>
        {completedChallenges.map((challenge, index) => (
          <Text key={index}>{challenge.activity}</Text>
        ))}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
  },
  progressBar: {
    height: 20,
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
  progress: {
    height: '100%',
    backgroundColor: 'blue',
    borderRadius: 10,
  },
});
