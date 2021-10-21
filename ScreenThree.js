//ScreenThree.js is the section where the user can read a saved note
import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";

//Importing AsyncStorage to use the FileSystem feature
import AsyncStorage from "@react-native-community/async-storage";

/*Reference of the AsyncStorage code used and modified: 
Lirs Tech Tips
https://www.youtube.com/watch?v=oXsTkvxHeYw
*/

export default function ScreenThree() {
  //creating a constant to create space between components
  const Separator = () => <View style={styles.separator} />;

  //Creating constants to retrieve the information that user provided before
  const [note, setNote] = React.useState(""); //Note that the user will write
  const [key, setKey] = React.useState(""); //Key value that will work as a PIN
  const [value, setValue] = React.useState(""); //Const to read the notes after saving them

  //Function to retrieve data
  const getValue = () => {
    AsyncStorage.getItem(key).then((value) => {
      setValue(value);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold" }}>Read your note</Text>
      <Separator />
      {/* Image component with the source on a website */}
      <Image
        source={{
          uri: "https://iconomator.com/wp-content/uploads/2020/03/treasure.png",
        }}
        style={{ width: 100, height: 100 }}
      />
      <Separator />
      <Text>Type the PIN of the note you want to access: </Text>
      <Separator />
      {/* Input box for the user to input the PIN of the file */}
      <TextInput
        style={styles.input}
        placeholder="e.g: key16@"
        onChangeText={(text) => setKey(text)}
      />
      <Separator />
      {/* Button the calls the getValue function and show the note according to the PIN given */}
      <Button title="Read note" onPress={getValue} />
      <Separator />
      <Text style={styles.output}>{value}</Text>
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
  },

  output: {
    margin: "20px",
    justifyContent: "space-between",
    fontWeight: "bold",
  },

  //Separator styling
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
