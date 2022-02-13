import React from "react";
import { View,Text } from "react-native";

import WeekAnalyticsCard from "./WeekAnalyticsCard";
import DayAnalyticsCard from "./DayAnalyticsCard";

class AnalyticsCard extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <View>
                <Text style={{fontSize:30,textAlign:'center',marginVertical:'1%'}}>{this.props.title}</Text>
                <WeekAnalyticsCard data={this.props.data.week} totalWeeks={5}/>
                <DayAnalyticsCard data={this.props.data.day}/>
            </View>
        );
    }
}
// totalWeeks should be dynamic according to year and month
export default AnalyticsCard;