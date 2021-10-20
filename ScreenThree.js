import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

export default function ScreenThree() {
  //creating a constant to create space between components
  const Separator = () => <View style={styles.separator} />;

  //Creating constants to retrieve the information that user provided before
  const [note, setNote] = React.useState("");
  const [key, setKey] = React.useState("");
  const [value, setValue] = React.useState("");

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
      <TextInput
        style={styles.input}
        placeholder="e.g: key16@"
        onChangeText={(text) => setKey(text)}
      />
      <Separator />
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

  //
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
