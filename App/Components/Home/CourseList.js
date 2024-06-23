
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { getCourseList } from '../../Services';

export default function CourseList(){

    useEffect(()=>{
        getCourses();
    },[])

    const getCourses =()=>{
        getCourseList().then(resp =>{
            console.log("Response", resp);
            
        })
    }
  return (
    <View>
      <Text>courselist</Text>
    </View>
  );
}


