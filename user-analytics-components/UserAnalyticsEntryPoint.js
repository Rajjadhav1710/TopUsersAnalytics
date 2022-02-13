import React from "react";

import PickerScreen from "./PickerScreen";
import MainScreen from "./MainScreen";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack2 = createNativeStackNavigator();

class UserAnalyticsEntryPoint extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Stack2.Navigator initialRouteName="Picker">
                <Stack2.Screen name="Picker" component={PickerScreen} options={{headerShown:false}}/>
                <Stack2.Screen name="Main" component={MainScreen} />
            </Stack2.Navigator>
        );
    }
}

export  default UserAnalyticsEntryPoint;