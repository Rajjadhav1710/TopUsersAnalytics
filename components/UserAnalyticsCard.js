import React from "react";
import { Text, View } from "react-native";

class UserAnalyticsCard extends React.Component{
    constructor(props){
        super(props);
    }

    getViewsTitle(analyticsType){
        if(analyticsType=='month')
            return 'Month Views';
        else if(analyticsType=='month-week')
            return 'Week Views';
        else
            return 'Day Views'
    }

    render(){
        return(
            <View style={{borderWidth:2,borderRadius:10}}>
                <Text style={{fontSize:40}}>user id:{this.props.userData.uid}</Text>
                <Text style={{fontSize:40}}>{this.getViewsTitle(this.props.analyticsType)}:{this.props.userData.views}</Text>
            </View>
        );
    }
}

export default UserAnalyticsCard;