import React, { useState } from 'react';
import { TouchableOpacity, View,Text } from 'react-native';

import DatePicker from 'react-native-modern-datepicker';
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';

const MonthYearPicker = (props) => {
  const [monthYear, setMonthYear] = useState('');

  return (
      <View>
        <DatePicker
        mode="monthYear"
        selectorStartingYear={2000}
        onMonthYearChange={selectedMonthYear => {setMonthYear(selectedMonthYear);console.log(selectedMonthYear);}}
        />
        <TouchableOpacity onPress={()=>{props.setParentMonthYear(monthYear,props.parent);}}>
            <Text style={{textAlign:'center',fontSize:30}}>Get Analytics</Text>
        </TouchableOpacity>
      </View>
    );
};

export default MonthYearPicker;