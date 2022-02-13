import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

class LoginScreen extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <View>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate("TopUsersAnalyticsEntryPoint");
                    }}>
                        <Text>Top Users Analytics</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate("UserAnalyticsEntryPoint");
                    }}>
                        <Text>User Analytics</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default LoginScreen;