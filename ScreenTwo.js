import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

export default function ScreenTwo() {
  //creating a constant to give space between components
  const Separator = () => <View style={styles.separator} />;

  //Creating constants to receive the information from the user
  const [note, setNote] = React.useState("");
  const [key, setKey] = React.useState("");
  const [value, setValue] = React.useState("");

  const saveValue = () => {
    if (note) {
      AsyncStorage.setItem(key, note);
      setNote("");
      //Alert after the user press the button
      alert("Note created");
    } else {
      //Alert in case the user do not fill the TextInput component
      alert("Please fill the blank spaces");
    }
  };

  const getValue = () => {
    AsyncStorage.getItem(key).then((value) => {
      setValue(value);
    });
  };

  return (
    <View style={styles.container}>
      <Text>Create a new note.</Text>
      <Text>Type your note here: </Text>
      <Separator />
      <TextInput
        style={styles.input}
        placeholder="e.g: My secret information"
        onChangeText={(text) => setNote(text)}
      />
      <Separator />
      <Text>Type a PIN to access your note: </Text>
      <Separator />
      <TextInput
        style={styles.input}
        placeholder="key16@"
        onChangeText={(text) => setKey(text)}
      />
      <Separator />
      <Button title="Create note" onPress={saveValue} />
    </View>
  );
}

//Style sheet for components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 25,
    borderColor: "gray",
    borderWidth: 1,
    justifyContent: "space-between",
  },

  //Separator styling
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
