import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/AntDesign'

const touchables = [
  {name: 'Anecdotes', content: "Découvre l'Histoire de l'Informatique à travers des anecdotes", page: 'Anecdotes'},
  {name: 'Quiz', content: 'Teste ta culture générale !', page: 'Quiz'},
]

class MainPage extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#e0e0e0' }}>

          {/* Touchable links to Anecdotes and Quiz pages */
            touchables.map((value, index) => {
              return(
                <TouchableOpacity key={ index } style={ styles.touchableSections } onPress={ () => navigate(value.page) }>
                  <View style={ styles.centerElements }>
                    <Icon name={ (value.name == 'Quiz') ? "questioncircleo" : "bulb1" } size={ 50 } color='#cf1456' />
                    <Text style={ styles.buttonName }>{ value.name }</Text>
                    <Text style={ styles.buttonContent }>{ value.content  }</Text>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.lighter,
    textAlign: 'center',
  },
  buttonName: {
    color: '#cf1456',
    fontSize: 26,
    fontWeight: '600',
  },
  buttonContent: {
    color: '#4287f5',
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
  },
  centerElements: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  touchableSections: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    padding: 40,
    flexDirection: 'column',
    width: '100%'
  }
});

export { MainPage };
