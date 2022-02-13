import React from "react";
import { Text, View } from "react-native";

class NoDataFoundCard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={{
                // borderWidth:1,
                borderRadius:10,
                marginHorizontal:'2%',
                marginVertical:'5%',
                padding:'1%',
                backgroundColor:'#f5f8ff',
                elevation:15
                }}>
                <Text style={{fontSize:30,fontWeight:'bold',textAlign:'center'}}>No Data Found</Text>
                <Text style={{fontSize:30,fontWeight:'bold',textAlign:'center'}}>¯\_(ツ)_/¯</Text>
            </View>
        );
    }
}

export default NoDataFoundCard;