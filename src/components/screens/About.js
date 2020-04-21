import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Alert,
  Image,
  Linking,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import EnseaLogo from './about/logo_ensea.png'


class AboutPage extends Component {

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#e0e0e0' }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={ styles.sectionTitle }>About microLogos</Text>
        </View>
        <View style={{ flex: 10, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={ styles.simpleText }>This app was developed as part of a project at ENSEA</Text>
          <TouchableHighlight onPress={ () => Linking.openURL('https://www.ensea.fr/en') }>
            <Image style={ { margin: 10 } } source={ EnseaLogo }/>
          </TouchableHighlight>
          <Text style={ [styles.simpleText, {textAlign: 'center'}] }>For the moment, there are only 10 anecdotes and 1 quiz</Text>
          <Text style={ [styles.simpleText, {textAlign: 'center'}] }>New content will be added soon</Text>
          <Text style={ styles.simpleText }>Please, be patient ...</Text>
          <Text style={ styles.simpleText }> </Text>
          <Text style={ styles.simpleText }>Developed for educational purposes</Text>
          <Text style={ styles.simpleText }> </Text>
          <Text style={ styles.simpleText }>by</Text>
          <Text style={ styles.simpleText }> </Text>
          <Text style={ styles.simpleText }>AYEB Mehdi</Text>
          <Text style={ styles.simpleText }>CHAHBOUNE Oussama</Text>
          <Text style={ styles.simpleText }>DAMA Abdoulaye</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={ styles.simpleText }>Version 1.0</Text>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#cf1456',
    padding: 15,
  },
  simpleText: {
    color: Colors.lighter,
    color: '#cf1456',
  }
});

export { AboutPage }
