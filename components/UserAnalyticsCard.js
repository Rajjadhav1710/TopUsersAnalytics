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
            <View style={{
                // borderWidth:1,
                borderRadius:10,
                marginHorizontal:'2%',
                marginVertical:'2%',
                padding:'1%',
                backgroundColor:'#f5f8ff',
                elevation:15
                }}>
                <Text style={{fontSize:25}}>🏋🏼‍♀️ user id:{this.props.userData.uid}</Text>
                <Text style={{textAlign:'center',color:'lightblue',fontSize:35}}>* * * * *</Text>
                <Text style={{fontSize:30}}>{this.getViewsTitle(this.props.analyticsType)}: {this.props.userData.views}👁‍🗨</Text>
            </View>
        );
    }
}

export default UserAnalyticsCard;