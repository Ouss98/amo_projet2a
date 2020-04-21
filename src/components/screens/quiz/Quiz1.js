import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert, TouchableOpacity, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {QuizPage} from '../Quiz'

const array = [{Question: "Sur quel système  d'exploitation s'appuyait Windows 95 ?", GoodAnswer:'MS-DOS 7.0', R1: 'Linux 1.2', R2:'Digitaal Uix', R3:'OpenBSD', R4:'MS-DOS 7.0', i:4 }, {Question: "En quelle année est sortie la première version de Windows 95 ?", GoodAnswer:'1995', R1: '1995', R2:'2000', R3:'1885', R4:'1990', i:1 }, {Question: "Quel système d'exploitation n'est pas basé sur un noyau Unix ?", GoodAnswer:'Windows', R1: 'MacOs', R2:'GNU/Linux', R3:'BSD', R4:'Windows',i:4 }, {Question: "Qui est le créateur du langage de programmation Python ?", GoodAnswer:'Guido van Rossum', R1: 'Bill Gate', R2:'Guido van Rossum', R3:'Jeff Bezos', R4:'Bjarne Stroustrup', i:2 }]

class Quiz1 extends Component {
  // dans cette partie on a des fonctions et comment configurer des states, au pire met how to make a state sur google
  state = {
    disabled: true,
    questionIndex: 0,
    screenID: 0,
    backgroundColor1: '#cf1456',
    backgroundColor2: '#cf1456',
    backgroundColor3: '#cf1456',
    backgroundColor4: '#cf1456'
  }

  setScreenID(id) {
    this.setState({screenID: id})
  }

  renderMain() {
    return(
      <Main/>
    )
  }

  pressHandler(rep, x){
    const { disabled } =  this.state
    if (rep===array[this.state.questionIndex].GoodAnswer) {
      switch (array[this.state.questionIndex].i) {
          case 1:
          this.setState({backgroundColor1:'#05f511'});
          break;
          case 2:
          this.setState({backgroundColor2:'#05f511'});
          break;
          case 3:
          this.setState({backgroundColor3:'#05f511'});
          break;
          case 4:
          this.setState({backgroundColor4:'#05f511'});
        }
      Alert.alert('Congrats 😉 ! Good answer');
    }

    else {
      switch (x) {
          case 1:
          this.setState({backgroundColor1:'#f50505'});
          break;
          case 2:
          this.setState({backgroundColor2:'#f50505'});
          break;
          case 3:
          this.setState({backgroundColor3:'#f50505'});
          break;
          case 4:
          this.setState({backgroundColor4:'#f50505'});
        }
       Alert.alert('Too Bad 😞 ! The answer was MS-DOS 7.0. Good Luck for the next question');
    }
    this.setState({disabled: !disabled})

  }

 setQuestionIndex() {
    this.setState({questionIndex: this.state.questionIndex + 1, disabled:true, backgroundColor1:'#cf1456', backgroundColor2:'#cf1456', backgroundColor3:'#cf1456', backgroundColor4:'#cf1456'})

  }

  render() {
    const { disabled } =  this.state

    const quizScreen =
    <View style={styles.container}>

        <Text style={styles.myheader}>
          QUIIZZZ !
        </Text>
        <Text style={styles.paragraph}>
          {array[this.state.questionIndex].Question}
        </Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.fixToText}>
          <TouchableOpacity
              style={[styles.submitButtonStyle, {backgroundColor: this.state.backgroundColor1}]}
              activeOpacity = { .5 }
              onPress={() => this.pressHandler(array[this.state.questionIndex].R1, 1)}
            >

            <Text style={styles.textStyle}> {array[this.state.questionIndex].R1}     </Text>

          </TouchableOpacity>
          <TouchableOpacity
              style={[styles.submitButtonStyle, {backgroundColor: this.state.backgroundColor4}]}
              activeOpacity = { .5 }
              onPress={() => this.pressHandler(array[this.state.questionIndex].R4, 4)}
            >

            <Text style={styles.textStyle}> {array[this.state.questionIndex].R4}    </Text>

          </TouchableOpacity>
        </View>

        <View style={styles.fixToText}>
          <TouchableOpacity
              style={[styles.submitButtonStyle, {backgroundColor: this.state.backgroundColor3}]}
              activeOpacity = { .5 }
              onPress={() => this.pressHandler(array[this.state.questionIndex].R3, 3)}
            >

            <Text style={styles.textStyle}> {array[this.state.questionIndex].R3}      </Text>

          </TouchableOpacity>
          <TouchableOpacity
              style={[styles.submitButtonStyle, {backgroundColor: this.state.backgroundColor2}]}
              activeOpacity = { .5 }
              onPress={() => this.pressHandler(array[this.state.questionIndex].R2, 2)}
            >

            <Text style={styles.textStyle}> {array[this.state.questionIndex].R2}     </Text>

          </TouchableOpacity>

        </View>
        </View>
        <View  style={{marginTop:45}}>
    {
     (this.state.questionIndex === 3) ?
      <Button title="Revenir au Quiz" disabled={ disabled } onPress={ () => this.setScreenID(1) }/>
     : <Button title="Question suivante" disabled={ disabled } onPress={ () => this.setQuestionIndex() }/>
    }
        </View>
      </View>

  const mainPage = <QuizPage/>

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
    marginBottom: 20,
  },
  textStyle:{
      color:'#fff',
      textAlign:'center',
  },
  submitButtonStyle: {
    flex: 1,
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginRight: 5,
    marginLeft: 5,
    backgroundColor:'#cf1456',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    height: 50,
    width: 170
  },
});

export default Quiz1
