//App.js is the file for the navigation between the three screens of the app
import React from 'react';

//Imports to navigate between screens
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Import of the three other JS files that will be the different screens of the app
import ScreenOne from './ScreenOne'; //Welcome screen of the app
import ScreenTwo from './ScreenTwo'; //Second screen: saving the data
import ScreenThree from './ScreenThree'; //Third screen: retrieving the data

//Creating const that will provide the navigation and each screen is placed on top of a stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    
    {/* Setting the three screens and their titles */}
      <Stack.Navigator>
        <Stack.Screen
          name="One"
          component={ScreenOne}
          options={{ title: 'My Secret Notepad' }}
        />
        <Stack.Screen 
        name="Two" 
        component={ScreenTwo}
        options={{ title: 'Create a note' }}
        />
        <Stack.Screen 
        name="Three" 
        component={ScreenThree}
        options={{ title: 'Read a note' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
