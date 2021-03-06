//ScreenOne.js is the welcome section of the application
import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

//Creating a constant to create space between components
const Separator = () => <View style={styles.separator} />;

export default function ScreenOne({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Secret Notepad!</Text>
      <Separator />
      {/* Image component with the source on a website */}
      <Image
        source={{
          uri: "https://media.istockphoto.com/vectors/unlock-icon-silhouette-vector-id600090774?b=1&k=20&m=600090774&s=170667a&w=0&h=jOsbvaaRIQXwFF2MBt9TEvGHvEz9raZKYjXNHKfdEo0=",
        }}
        style={{ width: 100, height: 100 }}
      />
      <Separator />
      {/* Buttons to navigate between the two other screens */}
      <Text style={styles.text}>Create notes that only you can find.</Text>
      <Separator />
      <Button
        onPress={() => {
          navigation.navigate("Two");
        }}
        title="Create a note"
      />
      <Separator />
      <Button
        color="#f194ff"
        onPress={() => {
          navigation.navigate("Three");
        }}
        title="Read a note"
      />
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
  title: {
    margin: "10px",
    justifyContent: "space-between",

    fontWeight: "bold",
  },
  text: {
    margin: "10px",
    justifyContent: "space-between",
  },

  //Separator styling
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
