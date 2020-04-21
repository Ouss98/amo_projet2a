import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Screen1 from './quiz/Quiz1'

class QuizPage extends Component {

  state = {quizID: 0}

  setQuizID(id) {
    this.setState({quizID: id})
  }

  render() {

    const main =
    <View style = {styles.container} >
        <Text style={styles.myheader}>
          QUIIZZZ !
        </Text>
        <Text style = {styles.paragraph}> Choisis ton quiz : </Text>

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity = { .5 }
                onPress={() => this.setQuizID(1)}
              >
              <Text style={styles.TextStyle}> Quizzz 1     </Text>
          </TouchableOpacity>

          <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity = { .5 }
                onPress={() => this.setQuizID(2)}
              >
              <Text style={styles.TextStyle}> Quizzz 2     </Text>
          </TouchableOpacity>
          <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity = { .5 }
                onPress={() => this.setQuizID(3)}
              >
              <Text style={styles.TextStyle}> Quizzz 3     </Text>

          </TouchableOpacity>
          <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity = { .5 }
                onPress={() => this.setQuizID(4)}
              >
              <Text style={styles.TextStyle}> Quizzz 4     </Text>
          </TouchableOpacity>
          <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity = { .5 }
                onPress={() => this.setQuizID(5)}
              >
              <Text style={styles.TextStyle}> Quizzz 5     </Text>
          </TouchableOpacity>
        </View>
    </View>

    const quiz1 = <Screen1/>;


    let screen;
        switch (this.state.quizID) {
          case 0:
          screen = main;
          break;
          case 1:
          screen = quiz1;

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
    backgroundColor: '#e0e0e0',
    padding: 8,
  },
  paragraph: {
    margin: 10,
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
    backgroundColor:'#cf1456',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    height: 50,
    width: 350
  },
});

export { QuizPage }
