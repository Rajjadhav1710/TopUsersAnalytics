import React from "react";

import { Text, View,ActivityIndicator,TextInput, TouchableOpacity } from "react-native";

class Picker extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <TextInput style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                }} placeholder="Enter" />
                <TextInput style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                }} placeholder="analytics type:'month','month-week','month-day'" />
                <TouchableOpacity>
                    <Text style={{textAlign:'center',fontSize:30}}>submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Picker;