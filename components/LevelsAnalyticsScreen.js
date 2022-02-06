import React from "react";
import { Text, View,FlatList } from "react-native";

import UserAnalyticsCard from "./UserAnalyticsCard";
import NoDataFoundCard from "./NoDataFoundCard";

class LevelsAnalyticsScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
        levelsData:[]
    };
  }

  componentDidMount(){
      console.log("from Levels componentDidMount()");

      this.setState({levelsData:this.props.route.params.levelsData});
  }


    componentDidUpdate(prevProps){
        // console.log(prevProps);
        // console.log(this.props);
        // console.log("\n");
        console.log(prevProps.route.params.levelsData);
        console.log(this.props.route.params.levelsData);
        // if(prevProps.route.params.levelsData===this.props.route.params.levelsData){
        //     console.log("props didn't change");
        // }else{
        //     console.log("props changed");
            
        //     this.setState({levelsData:this.props.route.params.levelsData});
        // }
    }

  render(){
    return(
      <View style={{flex:1}}>
        {/* <Text style={{ fontSize: 40 }}>Levels Analytics</Text> */}
        {this.state.levelsData.length === 0 ? <NoDataFoundCard /> :
          <FlatList data={this.state.levelsData} renderItem={({ item }) => <UserAnalyticsCard 
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

export default LevelsAnalyticsScreen;