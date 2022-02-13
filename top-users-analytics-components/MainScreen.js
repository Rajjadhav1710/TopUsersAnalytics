import React from "react";
import { Text, View,ActivityIndicator,TextInput, TouchableOpacity } from "react-native";

// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PoolsAnalyticsScreen from "./PoolsAnalyticsScreen";
import ChallengeAnalyticsScreen from "./ChallengeAnalyticsScreen";
import LevelsAnalyticsScreen from "./LevelsAnalyticsScreen";
import ProfileAnalyticsScreen from "./ProfileAnalyticsScreen";


const Tab = createBottomTabNavigator();

class MainScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      poolsData:[],
      challengeData:[],
      levelsData:[],
      profileData:[],
      isDataLoading:true,
    //   analyticsType:''  //possible values: 'month','month-week','month-day'
    };
  }

  getPostBody(analyticsType){//returns post body object depending upon analytics type
    let splittedPostBodyData=this.props.route.params.postBodyData.split(',');
    if(analyticsType==='month'){
        return {
            month:splittedPostBodyData[0]
        };
    }else if(analyticsType==='month-week'){
        return {
            month:splittedPostBodyData[0],
            week:splittedPostBodyData[1]
        };
    }else if(analyticsType==='month-day'){
        return {
            month:splittedPostBodyData[0],
            day:splittedPostBodyData[1]
        };
    }else {
        return {};
    }
  }

  getAnalyticsData(){

    //Top 20 User Analytics Data
    fetch('https://contest-test-2.herokuapp.com/analytics/getByField', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.getPostBody(this.props.route.params.analyticsType))
    })
    .then(response => response.json())
    .then(analyticsData => {
      this.setState({
        poolsData:analyticsData.data[0].pools,
        challengeData:analyticsData.data[0].challenge,
        levelsData:analyticsData.data[0].levels,
        profileData:analyticsData.data[0].profile,
        isDataLoading:false,
        // analyticsType:'month-day'
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
      this.state.isDataLoading?<ActivityIndicator size={'large'}/>:
        <Tab.Navigator>
          <Tab.Screen name="PoolsAnalytics" component={PoolsAnalyticsScreen} initialParams={{poolsData:this.state.poolsData,analyticsType:this.props.route.params.analyticsType}} options={{headerShown:false}}/>
          <Tab.Screen name="ChallengeAnalytics" component={ChallengeAnalyticsScreen} initialParams={{challengeData:this.state.challengeData,analyticsType:this.props.route.params.analyticsType}} options={{headerShown:false}}/>
          <Tab.Screen name="LevelsAnalytics" component={LevelsAnalyticsScreen} initialParams={{levelsData:this.state.levelsData,analyticsType:this.props.route.params.analyticsType}} options={{headerShown:false}}/>
          <Tab.Screen name="ProfileAnalytics" component={ProfileAnalyticsScreen} initialParams={{profileData:this.state.profileData,analyticsType:this.props.route.params.analyticsType}} options={{headerShown:false}}/>
        </Tab.Navigator>
    );
  }
}

export default MainScreen;