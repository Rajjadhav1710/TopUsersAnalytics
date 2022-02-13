import React from "react";
import { View,Dimensions,Text } from "react-native";

import { BarChart,LineChart } from "react-native-chart-kit";

class ScreenAnalyticsCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels: [],
                datasets:[
                    {
                        data:[0]
                    }
                ]
            }
        };
    }

    componentDidMount(){
        let chartData = {
            labels: ["pools","challenge","levels","profile"],
            datasets: [
                {
                    data: [this.props.data.poolsMainMonthViews,this.props.data.challengeMainMonthViews,this.props.data.levelsMonthViews,this.props.data.profileMonthViews]
                }
            ]
        };

        this.setState({
            chartData:chartData
        });
    }

    deepEqual(object1, object2) {
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);
        if (keys1.length !== keys2.length) {
          return false;
        }
        for (const key of keys1) {
          const val1 = object1[key];
          const val2 = object2[key];
          const areObjects = this.isObject(val1) && this.isObject(val2);
          if (
            areObjects && !this.deepEqual(val1, val2) ||
            !areObjects && val1 !== val2
          ) {
            return false;
          }
        }
        return true;
      }
      isObject(object) {
        return object != null && typeof object === 'object';
      }

    componentDidUpdate(prevProps){
        // console.log(prevProps);
        // console.log(this.props);
        // console.log("\n");
        if(this.deepEqual(prevProps.data,this.props.data)){
            console.log("props didn't change");
        }else{
            console.log("props changed");

            let chartData = {
                labels: ["pools","challenge","levels","profile"],
                datasets: [
                    {
                        data: [this.props.data.poolsMainMonthViews,this.props.data.challengeMainMonthViews,this.props.data.levelsMonthViews,this.props.data.profileMonthViews]
                    }
                ]
            };
    
            this.setState({
                chartData:chartData
            });
        }
    }

    render(){
        return(
            <View>
                <Text style={{fontSize:50}}>Screen Analytics</Text>
                <LineChart data={this.state.chartData}
                width={Dimensions.get("window").width}
                height={220}
                fromZero={true}
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "black",
                    // backgroundGradientFromOpacity: 1,
                    backgroundGradientTo: "black",
                    // backgroundGradientToOpacity: 0.5,
                    color: (opacity = 1) => `rgba(255, 255, 555, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    fillShadowGradientOpacity:0.2,
                    // strokeWidth: 2, // optional, default 3
                    // barPercentage: 0.5,
                    // useShadowColorFromDataset: false // optional
                  }}/>
            </View>
        );
    }
}

export default ScreenAnalyticsCard;