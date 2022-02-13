import React from "react";

import { Text, View,ActivityIndicator,TextInput, TouchableOpacity } from "react-native";

import DatePicker from 'react-native-modern-datepicker';
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';
import SelectDropdown from 'react-native-select-dropdown'

class PickerScreen extends React.Component{
    constructor(props){
        super(props);
        this.postBodyData="";
        this.analyticsType="";

        this.availableAnalyticsType=["month", "month-week", "month-day"];
        this.availableWeek=[1,2,3,4,5];
        this.availableDay=[0,1,2,3,4,5,6];
        this.monthYear=getFormatedDate(new Date(),"YYYY MM");
        this.week="";
        this.day="";
    }

    render(){
        return(
            <View>
                <View style={{alignItems:'center',marginVertical:'4%'}}>
                    <SelectDropdown
                        defaultButtonText="Analytics Type"
                        data={this.availableAnalyticsType}
                        onSelect={(selectedItem, index) => {
                            this.analyticsType=selectedItem;
                            console.log(selectedItem, index);
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                        }}

                        buttonStyle={
                            { 
                                width: "80%",
                                height: 50,
                                backgroundColor: "#444",
                                borderRadius: 8,
                            }
                        }

                        buttonTextStyle={
                            {
                                color: "#FFF",
                                textAlign: "center",
                                fontWeight: "bold",
                            }
                        }

                        dropdownStyle={{ backgroundColor: "#444" }}
                        rowStyle={{backgroundColor: "#444", borderBottomColor: "#C5C5C5",borderRadius:10}}
                        rowTextStyle={{
                            color: "#FFF",
                            textAlign: "center",
                            fontWeight: "bold",
                        }}
                    />
                </View>
                {/* <TextInput style={{
                    // height: 40,
                    margin: 12,
                    borderBottomWidth: 1,
                    padding: 10,
                    fontSize:20,
                    fontWeight:'bold',
                    borderRadius:10
                }} 
                placeholder="[month/year],[week or day]" 
                onChangeText={(text)=>{this.postBodyData=text;}}/> */}

                <View style={{padding:'4%'}}>
                    <DatePicker
                        style={{borderRadius: 10}}
                        mode="monthYear"
                        selectorStartingYear={2000}
                        onMonthYearChange={selectedMonthYear => {this.monthYear=selectedMonthYear; console.log(selectedMonthYear); }}
                    />
                </View>

                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                    <SelectDropdown
                        defaultButtonText="Week"
                        data={this.availableWeek}
                        onSelect={(selectedItem, index) => {
                            this.week=selectedItem;
                            console.log(selectedItem, index);
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                        }}

                        buttonStyle={
                            { 
                                // width: "80%",
                                height: 50,
                                backgroundColor: "#444",
                                borderRadius: 8,
                            }
                        }

                        buttonTextStyle={
                            {
                                color: "#FFF",
                                textAlign: "center",
                                fontWeight: "bold",
                            }
                        }

                        dropdownStyle={{ backgroundColor: "#444" }}
                        rowStyle={{backgroundColor: "#444", borderBottomColor: "#C5C5C5",borderRadius:10}}
                        rowTextStyle={{
                            color: "#FFF",
                            textAlign: "center",
                            fontWeight: "bold",
                        }}
                    />
                    </View>

                    <View style={{flex:1}}>
                    <SelectDropdown
                        defaultButtonText="Day"
                        data={this.availableDay}
                        onSelect={(selectedItem, index) => {
                            this.day=selectedItem;
                            console.log(selectedItem, index);
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                        }}

                        buttonStyle={
                            { 
                                // width: "80%",
                                height: 50,
                                backgroundColor: "#444",
                                borderRadius: 8,
                            }
                        }

                        buttonTextStyle={
                            {
                                color: "#FFF",
                                textAlign: "center",
                                fontWeight: "bold",
                            }
                        }

                        dropdownStyle={{ backgroundColor: "#444" }}
                        rowStyle={{backgroundColor: "#444", borderBottomColor: "#C5C5C5",borderRadius:10}}
                        rowTextStyle={{
                            color: "#FFF",
                            textAlign: "center",
                            fontWeight: "bold",
                        }}
                    />
                    </View>
                  
                </View>

                {/* <TextInput style={{
                    // height: 40,
                    margin: 12, 
                    borderBottomWidth: 1,
                    padding: 10,
                    fontSize:15,
                    fontWeight:'bold',
                    borderRadius:10
                }} 
                placeholder="analytics type:'month','month-week','month-day'"
                onChangeText={(text)=>{this.analyticsType=text;}} /> */}
                

                <TouchableOpacity onPress={()=>{
                    if((this.analyticsType==="month-week"&&this.week.length===0)||
                    (this.analyticsType==="month-day"&&this.day.length===0)){
                        alert("Something is missing...")
                    }
                    else
                    {
                        console.log(this.monthYear);
                    let splittedMonthYear=this.monthYear.split(' ');
                    console.log(splittedMonthYear);  
              
                    if(splittedMonthYear.length>1&&splittedMonthYear[1][0]=='0'){
                      splittedMonthYear[1]=splittedMonthYear[1].substring(1);
                    }
              
                    console.log(splittedMonthYear);
                    
                    if(splittedMonthYear.length>1){
                        this.monthYear=splittedMonthYear[1]+"/"+splittedMonthYear[0];    
                    }
                    console.log(this.monthYear);

                    if(this.analyticsType==="month"){
                        this.postBodyData=this.monthYear;
                    }else if(this.analyticsType==="month-week"){
                        this.postBodyData=this.monthYear+","+this.week;
                    }else if(this.analyticsType==="month-day"){
                        this.postBodyData=this.monthYear+","+this.day;
                    }

                    if(this.postBodyData.length===0||this.analyticsType.length===0){
                        alert('Something is missing...');
                    }else{
                        this.props.navigation.navigate('Main',{
                            postBodyData:this.postBodyData,
                            analyticsType:this.analyticsType
                        });
                        console.log("post body:"+this.postBodyData+" analytic type:"+this.analyticsType);
                    }
                    }
                    
                    
                    }}>
                    <Text style={{textAlign:'center',fontSize:30,marginVertical:'5%'}}>submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default PickerScreen;