import React from "react";
import { Text, View,FlatList } from "react-native";

import UserAnalyticsCard from "./UserAnalyticsCard";
import NoDataFoundCard from "./NoDataFoundCard";

class ProfileAnalyticsScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
        profileData:[]
    };
  }

  componentDidMount(){
      console.log("from Profile componentDidMount()");

      this.setState({profileData:this.props.route.params.profileData});
  }


    componentDidUpdate(prevProps){
        // console.log(prevProps);
        // console.log(this.props);
        // console.log("\n");
        console.log(prevProps.route.params.profileData);
        console.log(this.props.route.params.profileData);
        // if(prevProps.route.params.profileData===this.props.route.params.profileData){
        //     console.log("props didn't change");
        // }else{
        //     console.log("props changed");
            
        //     this.setState({profileData:this.props.route.params.profileData});
        // }
    }


  render(){
    return(
      <View style={{flex:1}}>
        {/* <Text style={{ fontSize: 40 }}>Profile Analytics</Text> */}
        {this.state.profileData.length === 0 ? <NoDataFoundCard /> :
          <FlatList contentContainerStyle={{flexGrow:1}} data={this.state.profileData} renderItem={({ item }) => <UserAnalyticsCard 
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

export default ProfileAnalyticsScreen;