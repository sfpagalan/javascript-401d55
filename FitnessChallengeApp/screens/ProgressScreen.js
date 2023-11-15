import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ProgressBar from '../components/ProgressBar';
import { extractTotalFromChallenge } from '../utility/challenges';
import { ChallengesContext } from '../context/ChallengesContext';

export default function ProgressScreen() {
    const { completedChallenges } = useContext(ChallengesContext);

    // useEffect(() => {
    //     if (route.params?.completedChallenges) {
    //         setCompletedChallenges(route.params.completedChallenges);
    //     }
    // }, [route.params?.completedChallenges]);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Completed Challenges:</Text>
            {completedChallenges.map((challenge, index) => {
                const total = extractTotalFromChallenge(challenge.activity);
                return (
                    <View key={index} style={styles.challengeItem}>
                        <Text style={styles.challengeText}>
                            {challenge.activity}
                        </Text>
                        <ProgressBar 
                            progress={Number(challenge.userAchievement)} 
                            total={total}
                        />
                    </View>
                );
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f8ff',
    },
    progressBarContainer: {
        marginBottom: 20,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#457B9D',
        marginBottom: 15,
    },
    challengeItem: {
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
    challengeText: {
        fontSize: 16,
    },
});
