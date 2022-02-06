import React from "react";
import { FlatList, Text, View } from "react-native";

import UserAnalyticsCard from "./UserAnalyticsCard";
import NoDataFoundCard from "./NoDataFoundCard";

class PoolsAnalyticsScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
        poolsData:[]
    };
  }

  componentDidMount(){
      console.log("from pools componentDidMount()");

      this.setState({poolsData:this.props.route.params.poolsData});

    //   console.log(this.props.route.params);
  }

    

    componentDidUpdate(prevProps){
        // console.log(prevProps);
        // console.log(this.props);
        // console.log("\n");
        console.log(prevProps.route.params.poolsData);
        console.log(this.props.route.params.poolsData);
        // if(prevProps.route.params.poolsData===this.props.route.params.poolsData){
        //     console.log("props didn't change");
        // }else{
        //     console.log("props changed");
            
        //     this.setState({poolsData:this.props.route.params.poolsData});
        // }
    }

  render(){
    return(
      <View style={{flex:1}}>
        {/* <Text style={{ fontSize: 40 }}>Pools Analytics</Text> */}
        {this.state.poolsData.length === 0 ? <NoDataFoundCard /> :
          <FlatList data={this.state.poolsData} renderItem={({ item }) => <UserAnalyticsCard 
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

export default PoolsAnalyticsScreen;