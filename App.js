import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from "./top-users-analytics-components/LoginScreen";
import TopUsersAnalyticsEntryPoint from "./top-users-analytics-components/TopUsersAnalyticsEntryPoint";
import UserAnalyticsEntryPoint from "./user-analytics-components/UserAnalyticsEntryPoint";

const MyStack = createNativeStackNavigator();

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <NavigationContainer>
        <MyStack.Navigator initialRouteName="Login">
          <MyStack.Screen name="Login" component={LoginScreen} />
          <MyStack.Screen name="TopUsersAnalyticsEntryPoint" component={TopUsersAnalyticsEntryPoint} options={{title:'Top Users Analytics'}}/>
          <MyStack.Screen name="UserAnalyticsEntryPoint" component={UserAnalyticsEntryPoint} options={{title:'User Analytics'}}/>
        </MyStack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;