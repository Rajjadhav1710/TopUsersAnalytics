import React from "react";
import { Text, View,ActivityIndicator,TextInput, TouchableOpacity } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PoolsAnalyticsScreen from "./components/PoolsAnalyticsScreen";
import ChallengeAnalyticsScreen from "./components/ChallengeAnalyticsScreen";
import LevelsAnalyticsScreen from "./components/LevelsAnalyticsScreen";
import ProfileAnalyticsScreen from "./components/ProfileAnalyticsScreen";

import Picker from "./components/Picker";

const Tab = createBottomTabNavigator();

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      poolsData:[],
      challengeData:[],
      levelsData:[],
      profileData:[],
      isDataLoading:true,
      analyticsType:''  //possible values: 'month','month-week','month-day'
    };
  }

  getAnalyticsData(){

    //Top 20 User Analytics Data
    fetch('https://contest-test-2.herokuapp.com/analytics/getByField', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        month:"1/2022",
        day:0
      })
    })
    .then(response => response.json())
    .then(analyticsData => {
      this.setState({
        poolsData:analyticsData.data[0].pools,
        challengeData:analyticsData.data[0].challenge,
        levelsData:analyticsData.data[0].levels,
        profileData:analyticsData.data[0].profile,
        isDataLoading:false,
        analyticsType:'month-day'
      });

      // console.log(analyticsData);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

   
  }

  componentDidMount(){
    console.log("from App componentDidMount()");

    this.getAnalyticsData();


  }

  render(){
    // console.log("from app render:");
    // console.log(this.state.poolsData);
    return(
      <Picker />
      // this.state.isDataLoading?<ActivityIndicator size={'large'}/>:
      // <NavigationContainer>
      //   <Tab.Navigator>
      //     <Tab.Screen name="PoolsAnalytics" component={PoolsAnalyticsScreen} initialParams={{poolsData:this.state.poolsData,analyticsType:this.state.analyticsType}}/>
      //     <Tab.Screen name="ChallengeAnalytics" component={ChallengeAnalyticsScreen} initialParams={{challengeData:this.state.challengeData,analyticsType:this.state.analyticsType}}/>
      //     <Tab.Screen name="LevelsAnalytics" component={LevelsAnalyticsScreen} initialParams={{levelsData:this.state.levelsData,analyticsType:this.state.analyticsType}}/>
      //     <Tab.Screen name="ProfileAnalytics" component={ProfileAnalyticsScreen} initialParams={{profileData:this.state.profileData,analyticsType:this.state.analyticsType}}/>
      //   </Tab.Navigator>
      // </NavigationContainer>
    );
  }
}

export default App;