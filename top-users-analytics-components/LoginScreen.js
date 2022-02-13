import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

class LoginScreen extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={()=>{
                        this.props.navigation.navigate("TopUsersAnalyticsEntryPoint");
                    }}>
                        <Text style={styles.buttonText}>Top Users Analytics</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={()=>{
                        this.props.navigation.navigate("UserAnalyticsEntryPoint");
                    }}>
                        <Text style={styles.buttonText}>User Analytics</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default LoginScreen;

const styles=StyleSheet.create({
    button:{
        borderWidth:1,
        borderColor:'lightblue',
        borderRadius:10,
        padding:'5%',
        marginVertical:'5%',
        marginHorizontal:'1%',
        backgroundColor:'#f5f8ff'
    },
    buttonText:{
        fontSize:35,
        fontWeight:'bold',
        textAlign:'center'
    }
});