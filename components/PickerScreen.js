import React from "react";

import { Text, View,ActivityIndicator,TextInput, TouchableOpacity } from "react-native";

class PickerScreen extends React.Component{
    constructor(props){
        super(props);
        this.postBodyData="";
        this.analyticsType="";
    }

    render(){
        return(
            <View>
                <TextInput style={{
                    // height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    fontSize:20,
                    fontWeight:'bold',
                    borderRadius:10
                }} 
                placeholder="[month/year],[week or day]" 
                onChangeText={(text)=>{this.postBodyData=text;}}/>
                <TextInput style={{
                    // height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    fontSize:15,
                    fontWeight:'bold',
                    borderRadius:10
                }} 
                placeholder="analytics type:'month','month-week','month-day'"
                onChangeText={(text)=>{this.analyticsType=text;}} />

                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Main',{
                    postBodyData:this.postBodyData,
                    analyticsType:this.analyticsType
                });}}>
                    <Text style={{textAlign:'center',fontSize:30}}>submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default PickerScreen;