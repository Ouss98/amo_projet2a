/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { MainPage, AnecPage, QuizPage, AboutPage } from './src/components/screens'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';


import Icon from 'react-native-vector-icons/AntDesign'

const Tabs = createBottomTabNavigator(
  {
    Accueil: { screen: MainPage,
            navigationOptions: {
              tabBarIcon: ({ tintColor }) => (
                <Icon name="home" size={25} color={tintColor} />
              )
            }
          },
    Anecdotes: { screen: AnecPage,
                  navigationOptions: {
                    tabBarIcon: ({ tintColor }) => (
                    <Icon name="bulb1" size={25} color={tintColor} />
                    )
                  }
                },
    Quiz: { screen: QuizPage,
              navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                <Icon name="questioncircleo" size={25} color={tintColor} />
                )
              }
            },
    "À propos": { screen: AboutPage,
              navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                <Icon name="infocirlceo" size={25} color={tintColor} />
                )
              }
            }
  },
  {
  tabBarOptions : {
      style: {
        backgroundColor: Colors.lighter,
      },
      showLabel: true
    }
  }
)

const AppContainer = createAppContainer(Tabs);

class App extends Component {
  render(){
    return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
      <AppContainer/>
    </>
  );
}
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },

});

export default App;
