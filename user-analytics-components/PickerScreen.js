import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import DatePicker from 'react-native-modern-datepicker';
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';
import SelectDropdown from 'react-native-select-dropdown'

class PickerScreen extends React.Component{
    constructor(props){
        super(props);
        this.screenName="";
        this.uid="";
        this.monthYear=getFormatedDate(new Date(),"YYYY MM");//still we have to remove leading 0 from month

        this.screens=["poolsMain", "challengeMain", "levels", "profile"];
    }

    render(){
        return(
            <View>
                <View>
                    <TextInput
                    style={{fontSize:25,borderBottomWidth:1,marginHorizontal:'4%'}} 
                    placeholder="User ID"
                    onChangeText={(text)=>{this.uid=text;}}/>
                </View>
                <View style={{padding:'4%'}}>
                    <DatePicker
                        style={{borderRadius: 10}}
                        mode="monthYear"
                        selectorStartingYear={2000}
                        onMonthYearChange={selectedMonthYear => {this.monthYear=selectedMonthYear; console.log(selectedMonthYear); }}
                    />
                </View>
                <View style={{alignItems:'center'}}>
                    <SelectDropdown
                        data={this.screens}
                        onSelect={(selectedItem, index) => {
                            this.screenName=selectedItem;
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
                <View>
                    <TouchableOpacity
                    style={{padding:'5%'}} 
                    onPress={()=>{
                        if(this.screenName.length===0||this.uid.length===0){
                            alert("Something Is Missing...");
                        }else{
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

                            //navigate to main screen
                            this.props.navigation.navigate("Main",{
                                screenName:this.screenName,
                                uid:this.uid,
                                monthYear:this.monthYear
                            });
                        }
                    }}>
                        <Text style={{fontSize:30,textAlign:'center'}}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default PickerScreen;