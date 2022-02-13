import React from "react";
import { ScrollView,ActivityIndicator,View, Text } from "react-native";

import AnalyticsCard from "./AnalyticsCard";

class MainScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      screenData:{
        month:'',
        monthViews:0,
        week:{},
        day:{}
      },
      isLoading:true,
      isDataEmpty:false//data exists or not
    };
  }

  getAnalyticsData(){

    //screenData
    fetch('https://contest-test-2.herokuapp.com/analytics/getData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        screenName:this.props.route.params.screenName,
        uid:this.props.route.params.uid,
        month:this.props.route.params.monthYear
      })
    })
    .then(response => response.json())
    .then(analyticsData => {
      console.log(analyticsData);

      if (analyticsData.data.length === 0) {
        this.setState({isDataEmpty:true,isLoading:false});
      } 
      else {
        switch (this.props.route.params.screenName) {
          case 'poolsMain':
            this.setState({ screenData: analyticsData.data[0].poolsMain, isLoading: false });
            break;
          case 'challengeMain':
            this.setState({ screenData: analyticsData.data[0].challengeMain, isLoading: false });
            break;
          case 'levels':
            this.setState({ screenData: analyticsData.data[0].levels, isLoading: false });
            break;
          case 'profile':
            this.setState({ screenData: analyticsData.data[0].profile, isLoading: false });
            break;
        }
      }

      // console.log(analyticsData.data[0].poolsMain);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  }


  componentDidMount(){
    this.getAnalyticsData();
  }


  render(){
    return(
      <ScrollView>
        {this.state.isLoading?<ActivityIndicator size={'large'}/>:
        (this.state.isDataEmpty?
          <View>
            <Text>NO DATA AVAILABLE</Text>
            <Text>¯\_(ツ)_/¯</Text>
          </View>
          :
          <View>
            <View>
              <Text>{this.props.route.params.monthYear}</Text>
            </View>
            <View>
              <AnalyticsCard title={this.props.route.params.screenName} data={this.state.screenData}/>
            </View>
          </View>
        )

        }
      </ScrollView>
    );
  }
}

export default MainScreen;