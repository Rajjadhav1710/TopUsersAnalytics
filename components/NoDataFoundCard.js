import React from "react";
import { Text, View } from "react-native";

class NoDataFoundCard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={{borderWidth:2,borderRadius:10}}>
                <Text style={{fontSize:40}}>No Data Found</Text>
            </View>
        );
    }
}

export default NoDataFoundCard;