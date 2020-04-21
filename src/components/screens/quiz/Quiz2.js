import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert, AppRegistry, TouchableOpacity, ImageBackground, TouchableHighlight, Header } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Constants from 'expo-constants';
import {createAppContainer} from "react-navigation"
import Main from "./App"

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const array = [{Question: "Sur quel système  d'exploitation s'appuyait Windows 95 ?", GoodAnswer:'MS-DOS 7.0', R1: 'Linux 1.2', R2:'Digitaal Uix', R3:'OpenBSD', R4:'MS-DOS 7.0' }, {Question: "En quelle année est sortie la première version de Windows 95 ?", GoodAnswer:'1995', R1: '1995', R2:'2000', R3:'1885', R4:'1990' }, {Question: "Quel système d'exploitation n'est pas basé sur un noyau Unix", GoodAnswer:'Windows', R1: 'MacOs', R2:'GNU/Linux', R3:'BSD', R4:'Windows' }, {Question: "Qui est le créateur du langage de programmation Python", GoodAnswer:'Guido van Rossum', R1: 'Bill Gate', R2:'Guido van Rossum', R3:'Jeff Bezos', R4:'Bjarne Stroustrup' }]

export default class App extends React.Component {
  // dans cette partie on a des fonctions et comment configurer des states, au pire met how to make a state sur google
  state = { disabled: true, questionIndex: 0, screenID:0}

  setScreenID(id) {
    this.setState({screenID: id})
  }

  pressHandler(rep){
    const { disabled } =  this.state
    if (rep===array[this.state.questionIndex].GoodAnswer) {
      Alert.alert('Congrats 😉 ! Good answer');
    }

    else {
       Alert.alert('Too Bad 😞 ! The answer was MS-DOS 7.0. Good Luck for the next question');
    }
    this.setState({disabled: !disabled})

  }

 setQuestionIndex() {
    this.setState({questionIndex: this.state.questionIndex + 1, disabled:true})

  }

  render() {
    const { disabled } =  this.state
    const quizScreen = <View style={styles.container}>
      {/* Pour voir les icones et la page contenat les props des icons, tape sur google vector icon react native c'est 2 premiers liens*/}
       {/* <Icon.Button style = {styles.Iconstyle} name="left" backgroundColor="#fff" size={30} color="#cf1456" onPress = {() => Alert.alert('Button OK')} >
        Back to Quizz
        </Icon.Button>*/}
        <Text style={styles.myheader}>
          QUIIZZZ !
        </Text>
        <Text style={styles.paragraph}>
          {array[this.state.questionIndex].Question}
        </Text>
        <View style={styles.fixToText}>
            <TouchableOpacity
              style={styles.SubmitButtonStyle}
              activeOpacity = { .5 }
              onPress={() => this.pressHandler(array[this.state.questionIndex].R1)}
            >

            <Text style={styles.TextStyle}> {array[this.state.questionIndex].R1}     </Text>

            </TouchableOpacity>
            <TouchableOpacity
              style={styles.SubmitButtonStyle}
              activeOpacity = { .5 }
              onPress={() => this.pressHandler(array[this.state.questionIndex].R4)}
            >

            <Text style={styles.TextStyle}> {array[this.state.questionIndex].R4}    </Text>

            </TouchableOpacity>
        </View>
        <View style={styles.fixToText}>
          <TouchableOpacity
              style={styles.SubmitButtonStyle}
              activeOpacity = { .5 }
              onPress={() => this.pressHandler(array[this.state.questionIndex].R3)}
            >

            <Text style={styles.TextStyle}> {array[this.state.questionIndex].R3}      </Text>

            </TouchableOpacity>
            <TouchableOpacity
              style={styles.SubmitButtonStyle}
              activeOpacity = { .5 }
              onPress={() => this.pressHandler(array[this.state.questionIndex].R2)}
            >

            <Text style={styles.TextStyle}> {array[this.state.questionIndex].R2}     </Text>

            </TouchableOpacity>
        </View>
        <View  style={{marginTop:45}}>
    {
     (this.state.questionIndex === 3) ?
      <Button title="Back to Quizz" disabled={ disabled } onPress={ () => this.setScreenID(1) }/>
     : <Button title="Next question" disabled={ disabled } onPress={ () => this.setQuestionIndex() }/>
    }
        </View>
      </View>
  const mainPage = <Main/>
  let screen;
        switch (this.state.screenID) {
          case 0:
          screen = quizScreen;
          break;
          case 1:
          screen = mainPage;
        }

    return (
        <View style = {styles.containerbis} >
        {screen}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  IconStyle: {
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:-18,
    marginRight:30,
  },
  myheader: {
    margin: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 45,
    color: '#cf1456',
  },
  containerbis: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#e0e0e0',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
   fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  TextStyle:{
      color:'#fff',
      textAlign:'center',
  },
  SubmitButtonStyle: {

    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:-17,
    marginRight:30,
    backgroundColor:'#cf1456',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    height: 50,
    width: 170
  },
});
