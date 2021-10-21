/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';



const Login = ({navigation}) =>{
  return(
    <View style = {styles.container}>
      <View style= {styles.head}>
        <Text style={styles.texthead}>Bet</Text>
        <Text style={styles.texthead}>On BETTER</Text>
      </View>
      <View style = {styles.inputCont}>
        <TextInput placeholder='Email' style={styles.TextInput} />
        <TextInput placeholder='Password' style={styles.TextInput} />
      </View>
      <TouchableOpacity ><Text style = {styles.forgot}>Forgot Password?</Text></TouchableOpacity>
      <TouchableOpacity>
        <View style= {styles.login}><Text style={{color: 'white', fontSize: 20}}>Login</Text></View>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', top:-119, left:50}}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress= {()=> navigation.navigate('SignUp')}><Text style={{color:'blue'}}>SignUp</Text></TouchableOpacity>
      </View>
      <TouchableOpacity>
        <View style= {styles.facebook}><Text style={{color: 'white', fontSize: 20}}>Connect with facebook</Text></View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style= {styles.guest}><Text style={{color: 'white', fontSize: 20}}>Continue as guest</Text></View>
      </TouchableOpacity>
      <Text style={{fontSize:17}}>By helping a soul together we can change the world</Text>

    </View>
  )
}
const styles = StyleSheet.create({
  container:{
     flex: 1,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  head:{
    flexDirection: 'row',
    paddingVertical: 20,
    marginRight:150,

  },
  texthead:{
    fontFamily: 'arial black',
    fontStyle: 'normal',
    fontSize : 30,
    fontWeight: '700'

  },
  inputCont:{
    marginHorizontal: '1%',
    marginVertical: '25%',
    bottom: 50,
    

  },
  TextInput:{
    borderWidth: 1,
    width : 300,
    padding: 15,
    height : 45,
    color: 'white',
    boxShadow: '0 4 4 rgba(0,0,0,0.25)',
    marginVertical: 10,
    borderColor: 'rgba(229, 229, 1)',

  },
  forgot:{
    textAlign: 'center',
    fontFamily: 'arial',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize : 18,
    top: -160,
    left: 78

  },
  login:{
    backgroundColor: 'rgba(184, 129, 207, 1)',
    height: 55,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    top: -120,
    borderRadius: 20
  },
  facebook:{
    backgroundColor: 'rgba(104, 100, 207, 1)',
    height: 55,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
    borderRadius: 20
  },
  guest:{
    backgroundColor: 'rgba(184, 129, 207, 1)',
    height: 55,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    top: -25,
    borderRadius: 20
  },
});

export default Login;


