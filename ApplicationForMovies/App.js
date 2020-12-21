import React, {Component} from 'react';
import {styles} from './myStyles';
import {SafeAreaView, ScrollView, View, Text, StatusBar, TouchableOpacity, TextInput, Image} from 'react-native';
import {Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import MovieLists from './Content'

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      urlLink: 'spider',
      dataState: [],
      empty:''
    }
  }

  changeName(text){
    this.setState({
      urlLink: text
    })
  }


  linkChangedName = 'batman';
  linkMain = `http://api.tvmaze.com/search/shows?q=${this.linkChangedName}`;
  

  dataJson = []
  //dataJsonChanged = []

  
  componentDidMount = async() =>{
    try{
      const response = await fetch(`http://api.tvmaze.com/search/shows?q=${this.state.urlLink}`)
      const data = await response.json()
      this.dataJson = data
      this.setState({empty: ''})
      console.log('didmountfdfd  ' + this.dataJson[0].show.name)
    }
    catch (e){
      console.log('Did - url is wrong' + e)
    }
  }
  componentDidUpdate = async() =>{
    try{
      const response = await fetch(`http://api.tvmaze.com/search/shows?q=${this.state.urlLink}`)
      const data = await response.json()
      this.dataJson = data
      this.setState({empty: ''})
      console.log('didmountfdfd  ' + this.dataJson[0].show.name)
    }
    catch (e){
      console.log('Did - url is wrong' + e)
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <View style = {styles.header}>
          <View style = {styles.headerLogo}>
            <Text style = {styles.headerText}>
              Best Movies!
            </Text>
          </View>
          <View style = {styles.headerInput}>
            <TextInput style = {styles.inputText} onChangeText={(text) => this.changeName(text)}></TextInput>
            
          </View>
        </View>

        <View style = {styles.results}>
          <ScrollView contentContainerStyle ={styles.resultsScrollContainer} style = {styles.resultsScroll}>
            <MovieLists jsonFile = {this.dataJson}/>         
          </ScrollView>
        </View>
      </View>
    )
  }



}
export default App;
