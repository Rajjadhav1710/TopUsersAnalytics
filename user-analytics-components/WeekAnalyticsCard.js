import React from "react";
import { View,Dimensions } from "react-native";

import { BarChart } from "react-native-chart-kit";

class WeekAnalyticsCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels: [],
                datasets:[
                    {
                        data:[]
                    }
                ]
            }
        };
    }

    componentDidMount(){
        let chartData = {
            labels: [],
            datasets: [
                {
                    data: []
                }
            ]
        };

        if(this.props.totalWeeks==5){
            chartData.labels=["week-1","week-2","week-3","week-4","week-5"];
            chartData.datasets[0].data=[0,0,0,0,0]
        }else{
            chartData.labels=["week-1","week-2","week-3","week-4"];
            chartData.datasets[0].data=[0,0,0,0]
        }

        for(let i=1;i<=this.props.totalWeeks;i++){
            if(this.props.data[i]!=undefined){
                chartData.datasets[0].data[i-1]=this.props.data[i];
            }
        }

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
                labels: [],
                datasets: [
                    {
                        data: []
                    }
                ]
            };
    
            if(this.props.totalWeeks==5){
                chartData.labels=["week-1","week-2","week-3","week-4","week-5"];
                chartData.datasets[0].data=[0,0,0,0,0]
            }else{
                chartData.labels=["week-1","week-2","week-3","week-4"];
                chartData.datasets[0].data=[0,0,0,0]
            }
    
            for(let i=1;i<=this.props.totalWeeks;i++){
                if(this.props.data[i]!=undefined){
                    chartData.datasets[0].data[i-1]=this.props.data[i];
                }
            }
    
            this.setState({
                chartData:chartData
            });
        }
    }

    render(){
        return(
            <View style={{alignItems:'center',marginVertical:'2%'}}>
                <BarChart data={this.state.chartData}
                width={Dimensions.get("window").width-10}
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
                    fillShadowGradientOpacity:1,
                    strokeWidth: 2, // optional, default 3
                    barPercentage: 0.5,
                    useShadowColorFromDataset: false // optional
                  }}
                
                style={{
                    borderRadius: 16
                }}
                />
            </View>
        );
    }
}

export default WeekAnalyticsCard;