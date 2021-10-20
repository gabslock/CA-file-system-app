import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ScreenOne({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to My Secret Notepad!</Text>
            <Text style={styles.text}>Create notes that only you can find.</Text>
            <Button
                onPress={() => {
                    navigation.navigate('Two')
                }}
                title="Create a note"
            />
            <Button
                onPress={() => {
                    navigation.navigate('Three')
                }}
                title="Read a note"
            />
        </View>
            );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        margin: '10px'
      },
    text: {
        margin: '10px'
      }

  });