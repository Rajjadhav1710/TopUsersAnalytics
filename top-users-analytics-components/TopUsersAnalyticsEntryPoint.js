import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PickerScreen from "./PickerScreen";
import MainScreen from "./MainScreen";

const Stack1 = createNativeStackNavigator();

class TopUsersAnalyticsEntryPoint extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
        <Stack1.Navigator initialRouteName="Picker">
          <Stack1.Screen name="Picker" component={PickerScreen} options={{headerShown:false}}/>
          <Stack1.Screen name="Main" component={MainScreen} />
        </Stack1.Navigator>
    );
  }
}

export default TopUsersAnalyticsEntryPoint;