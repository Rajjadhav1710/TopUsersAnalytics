import React from "react";
import { Text, View,FlatList } from "react-native";

import UserAnalyticsCard from "./UserAnalyticsCard";
import NoDataFoundCard from "./NoDataFoundCard";

class ChallengeAnalyticsScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
        challengeData:[]
    };
  }

  componentDidMount(){
    console.log("from Challenge componentDidMount()");

    this.setState({challengeData:this.props.route.params.challengeData});
  }


    componentDidUpdate(prevProps){
        // console.log(prevProps);
        // console.log(this.props);
        // console.log("\n");
        console.log(prevProps.route.params.challengeData);
        console.log(this.props.route.params.challengeData);
        // if(prevProps.route.params.challengeData===this.props.route.params.challengeData){
        //     console.log("props didn't change");
        // }else{
        //     console.log("props changed");
            
        //     this.setState({challengeData:this.props.route.params.challengeData});
        // }
    }

  
  render(){
    return(
      <View>
        <Text style={{ fontSize: 40 }}>Challenge Analytics</Text>
        {this.state.challengeData.length === 0 ? <NoDataFoundCard /> :
          <FlatList data={this.state.challengeData} renderItem={({ item }) => <UserAnalyticsCard 
          analyticsType={this.props.route.params.analyticsType}
          userData={{
            uid: item.uid,
            views: (this.props.route.params.analyticsType==='month')?(item.monthViews):((this.props.route.params.analyticsType==='month-week')?(item.weekViews):(item.dayViews))
          }} />} />
        }
      </View>
    );
  }
}

export default ChallengeAnalyticsScreen;