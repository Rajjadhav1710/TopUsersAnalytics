import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PickerScreen from "./components/PickerScreen";
import MainScreen from "./components/MainScreen";

const Stack = createNativeStackNavigator();

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Picker">
          <Stack.Screen name="Picker" component={PickerScreen} />
          <Stack.Screen name="Main" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;