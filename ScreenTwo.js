import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

export default function ScreenTwo() {
  //creating a constant to create space between components
  const Separator = () => <View style={styles.separator} />;

  //Creating constants to receive the information from the user
  const [note, setNote] = React.useState("");
  const [key, setKey] = React.useState("");
  const [value, setValue] = React.useState("");

  //Function to store data
  const saveValue = () => {
    if (note) {
      AsyncStorage.setItem(key, note);
      setNote("");
      //Alert after the user press the button
      alert("Note successfully created");
    } else {
      //Alert in case the user do not fill the TextInput component
      alert("Please insert some text");
    }
  };

  //Function to retrieve data
  const getValue = () => {
    AsyncStorage.getItem(key).then((value) => {
      setValue(value);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold" }}>Create a new note.</Text>
      <Separator />
      {/* Image component with the source on a website */}
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Icon-notepad.svg/1200px-Icon-notepad.svg.png",
        }}
        style={{ width: 100, height: 100 }}
      />
      <Separator />
      <Text>Type your note here: </Text>
      <Separator />
      <TextInput
        style={styles.note}
        placeholder="e.g: My secret note"
        onChangeText={(text) => setNote(text)}
        multiline={true} //Creates a multiline text input
      />
      <Separator />
      <Text>Type a PIN to protect your note: </Text>
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
    justifyContent: "center",
  },

  //Style for the user input (note)
  note: {
    height: 50,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    justifyContent: "center",
  },

  //Separator styling
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
