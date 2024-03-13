import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { BackHandler, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
export default function NewUser() {
    var email,pwd,cnfpwd;
    return (
      <ImageBackground source={require("../assets/catpurple.jpg")}
      style={styles.container}>
  
      
      <View style={{
        backgroundColor:"#0003",
        width:"95%",
        height:280,
        alignItems: "center",
        borderRadius:10,
        borderColor:"purple",
        borderWidth:2,
      }}>
        <Text style={{
          fontSize:40,
          fontStyle:"italic",
          fontWeight:"bold",
          color:"pink",
          borderRadius:5,
        }}>al salem</Text>
        <TextInput onChangeText={(input)=>{email=input}} keyboardType='email-address' placeholder='email' style={styles.inputStyle}></TextInput>
        <TextInput onChangeText={(input)=>{pwd=input}} secureTextEntry style={styles.inputStyle}></TextInput>
        <TextInput onChangeText={(input)=>{cnfpwd=input}} secureTextEntry style={styles.inputStyle}></TextInput>
        <View style={{
          flexDirection: "row",
          gap:10
        }}>
          <Button onPress={()=>{
              if(email == azer && pwd == 123 && pwd == cnfpwd){
                  alert("Welcome")
              }else{
                  alert("Wrong Email or Password")
              }
          }} title="Register"></Button>
          <Button onPress={()=>{
              BackHandler.exitApp();
          }} title="Cancel"></Button>
        </View>
        <StatusBar style="auto" />
      </View>
      </ImageBackground>
    );
  }
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0004',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputStyle:{
        borderWidth: 1,
        borderRadius: 5,
        width: "90%",
        height: 40,
        margin: 10,
        textAlign: "center",
        borderRadius: 7,
        fontSize: 20,
        backgroundColor: "white",
      }
})