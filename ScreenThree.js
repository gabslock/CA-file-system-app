import React from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

export default function ScreenThree() {

    const [note, setNote] = React.useState('');
    const [key, setKey] = React.useState('');
    const [value, setValue] = React.useState('');

    const getValue = () => {
      AsyncStorage.getItem(key)
      .then((value) => {
        setValue(value);
      })
    }
  
    return (
      
      <View style={styles.container}>
        <Text>Read your note.</Text>

        <Text>Type the PIN of the note you want to access: </Text>

        <TextInput 
          style={styles.input}
          placeholder="e.g: key16@"
          onChangeText={(text) => setKey(text)}
        />

        <Button
        title="Read note"
        onPress={getValue}
        />

        <Text>{value}</Text>
  
      </View>
      
    );
  }
  
  //Style sheet for components 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 25,
      borderColor: 'gray',
      borderWidth: 1,
   
    },
  });