import React, { useState } from 'react';
import { Pressable, View, StyleSheet, ImageBackground, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import {router} from "expo-router";

function profileSettings() {

   

  return (
    <View style={styles.container}>

        {/*Account*/}
        {/*Privacy*/}
        {/*Notifications*/}

  


</View>
  );
}

 {/* Styling */}

 const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#010C80',
    },


    

   
 })

export default profileSettings;