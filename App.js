import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Header} from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      text: '',
      displayText: ''
    }
  }
  render(){
    return (

      <SafeAreaProvider>
        <View style={styles.container}>
          <Header 
            backgroundColor = {'#9c8210'} 
            centerComponent = {{
              text:'Monkey Chunky App',
              style: {color: '#fff', fontSize: 20}
            }}/>
            <TextInput 
              style = {styles.inputbox}
              onChangeText = {(text)=>{
                this.setState({
                  text:text,
                });
              }}
              value = {this.state.text}
               />
               <TouchableOpacity
               style = {styles.goButton}>

               </TouchableOpacity>
               <Text>{this.state.displayText}</Text>
        </View>
      </SafeAreaProvider>
      
    );
    
  }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputbox: {
    width: 80,
    height: 40,
    borderWidth: 4,
    alignSelf: 'Center',
    marginTop: 200,
    outline: 'none'
  }
});
