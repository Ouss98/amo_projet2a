import React, { Component } from 'react';
import RNFS from 'react-native-fs';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Button,
  Image,
  Linking,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Enigma from './anecdotes/images/Enigma.jpeg'
import Calculateur from './anecdotes/images/Calculateur.jpeg'
import ABC from './anecdotes/images/ABC.jpg'
import ASCC from './anecdotes/images/ASCC.jpg'
import Colossus_I from './anecdotes/images/Colossus_I.jpg'
import ENIAC from './anecdotes/images/ENIAC.jpeg'
import IBM from './anecdotes/images/IBM.jpeg'
import UNIVAC from './anecdotes/images/UNIVAC_1.jpg'
import WHIRL1 from './anecdotes/images/Whirlwind1.png'
import PDP8 from './anecdotes/images/PDP-8.jpg'

import Icon from 'react-native-vector-icons/AntDesign'


const anecdotes = [

  {title: 'Enigma et les Bombes'
   ,story: 'Composée d\'un clavier, de 26 lampes pour représenter l\'alphabet et généralement de 3 rotors, l\'énigma était destinée à l\'origine à crypter des documents d\'affaires. Les services secrets allemands ont racheté (presque) tous les exemplaires et ont considérablement amélioré le modèle commercial pour leurs besoins. Les Polonais, tout d\'abord, ont étudié le principe et commencer à développer des solutions capables de décoder les messages cryptés. Ces travaux seront récupérés par le "British Government Communication Headquarters" basé à Bletchley Park où Alan TURING créera une machine "la bombe" (on pense que ce nom vient du tic-tac produit durant les calculs) pour permettre de tester rapidement les combinaisons possibles.'
   ,link: "https://www.apprendre-en-ligne.net/crypto/Enigma/bombe.html"
  ,image: Enigma},

  {title: 'Le tout premier calculateur Z1'
   ,story: 'Ce premier calculateur numérique polyvalent programmable a été construit pendant la Seconde Guerre mondiale par les États-Unis. Le gouvernement américain avait alors financé un projet dirigé par John Mauchly, Presper Eckert, et leurs collègues de la Moore School of Electrical Engineering de l’Université de Pennsylvanie. Leur objectif était d’inventer un ordinateur entièrement électronique. Sous contrat avec l’armée et sous la direction de Herman Goldstine, les travaux sur ENIAC débutèrent au début de 1943.'
   ,link: "https://dailygeekshow.com/eniac-premier-ordinateur/"
  ,image: Calculateur},

  {title: 'ABC'
   ,story: 'Bien qu’il ait fallu plusieurs années pour qu’on lui reconnaisse cette qualité, l’ABC (Atanasoff-Berry Computer) a fait date comme étant le tout premier ordinateur électronique. On pourrait croire que les termes « ordinateur électronique » sont redondants mais comme on vient de le voir avec le Harvard Mark I, les ordinateurs sans composants électroniques ont bien existé et fonctionnaient grâce à des interrupteurs mécaniques, des rouages à palettes ajustables, des relais électriques et des manivelles. A l’opposé, l’ABC assurait ses calculs grâce à des composants électroniques et représente à ce titre une étape fondatrice dans l’histoire de l’informatique.'
   ,link: "https://www.tomshardware.fr/66-ans-de-serveurs-en-images-2/2/"
  ,image: ABC},

  {title: 'Colossus I'
   ,story: 'En 1941, le haut commandement militaire allemand mit en service un système de chiffrement beaucoup plus raffiné que celui de l’Enigma, le code Lorenz. Ici encore, l’équipe de Turing réussit dès 1942 à décrypter ce code. Néanmoins, le décodage manuel était trop lent pour un usage opérationnel.Aussi, des machines spécialisées furent construites pour accélérer ce travail, sous la supervision de Max Newman : d’abord le Heath Robinson, puis le Colossus. Construit en l’espace de onze mois par une équipe dirigée par Thomas “Tommy” Flowers, le Colossus était une machine électronique programmable à l’aide d’un tableau de connexion. Dédié à une tâche spécialisée, il n’était pas Turing-complet. Mis en service au début de 1944, le Colossus remplit parfaitement sa fonction et dix exemplaires en furent construits en 1944-45.'
   ,link: "https://aconit.inria.fr/omeka/exhibits/show/histoire-machines/naissance-ordinateur/colossus.html"
  ,image: Colossus_I},

  {title: ' ENIAC '
   ,story: 'En 1945, à l\'université de Pennsylvanie, les ingénieurs américains John P. Eckert et John W. Mauchly achèvent la construction du premier calculateur numérique électronique programmable connu : l\'E.N.I.A.C. (Electronic Numerical Integrator and Computer), initialement destiné à remplacer un service de calcul mécanique pour la compilation des tables de tir d\'artillerie. Volumineux (30 t, 30 mètres cube), utilisant 18 000 tubes électroniques, l\'E.N.I.A.C. est de cent à mille fois plus rapide que les appareils électromécaniques. Inauguré en 1946 et utilisé jusqu\'en 1955, il sert d\'abord à l\'armée américaine pour des calculs balistiques ; puis il aide à résoudre des problèmes de physique nucléaire et de météorologie, à l\'initiative du mathématicien John von Neumann. '
   ,link: "https://www.universalis.fr/encyclopedie/e-n-i-a-c/#i_19544"
  ,image: ENIAC},

  {title: ' IBM SSEC '
   ,story: 'Le IBM Selective Sequence Electronic Calculator (IBM SSEC) était un ordinateur électromécanique construit par IBM. Sa conception débuta en 1944 et il fut opérationnel de 1948 à 1952.Cet ordinateur avait plusieurs des caractéristiques d\'un ordinateur à programme enregistré et il a été le premier ordinateur à traiter ses instructions comme des données, mais il n\'était pas complètement électronique.Bien qu\'il ait été utilisé pour des applications importantes, le SSEC est rapidement devenu désuet. Étant le plus gros ordinateur électromécanique jamais construit, sa principale contribution a été la publicité et la crédibilité qu\'il a procurées à IBM. '
   ,link: "https://www.universalis.fr/encyclopedie/e-n-i-a-c/#i_19544"
  ,image: IBM},

  {title: ' UNIVAC I '
   ,story: 'L\'UNIVAC I (UNIVersal Automatic Computer I) est le premier ordinateur commercial réalisé aux États-Unis. Il a été créé par J. Presper Eckert et John Mauchly, déjà à l\'origine de l\'ENIAC. Avant que d\'autres machines ne sortent dans la même série, l\'UNIVAC I était tout simplement appelé UNIVAC. Le premier ordinateur est livré à l\'United States Census Bureau le 30 mars 1951 et mis en service le 14 juin. Le cinquième (construit pour l\'Atomic Energy Commission) a été utilisé par CBS pour prédire l\'issue de l\'élection présidentielle de 1952 (alors que les sondages réalisés « humainement » donnaient Eisenhower perdant). À partir d\'un échantillon d\'un pour cent des votants, il prédit qu\'Eisenhower aurait été élu président, chose que personne n\'aurait pu croire, mais UNIVAC avait vu juste. Les ordinateurs étaient fabriqués par Univac, une filiale de Remington Rand. L\'UNIVAC a été un symbole de l\'informatique, apparaissant entre autres dans Objectif Lune de Hergé et Un cerveau d\'un milliard de dollars de Ken Russel.'
   ,link: "https://fr.wikipedia.org/wiki/UNIVAC_I"
  ,image: UNIVAC},

  {title: ' Whirlwind I '
   ,story: 'Whirlwind I est un ordinateur à tubes à vide mis au point par le Servomechanisms Laboratory du MIT pour le compte de l\'US Navy entre 1945 et 1951 ; il a ensuite servi jusque dans les années 1980. C\'est l\'un des premiers ordinateurs numériques qui produit des sorties en temps réel1 et l\'un des premiers qui ne tend pas à simplement copier des calculateurs mécaniques antérieurs. Il servira de modèle pour la conception du Whirlwind II, lequel inspirera à son tour le système de défense aérienne SAGE de l’United States Air Force et, de façon indirecte, la plupart des ordinateurs d\'affaires et les mini-ordinateurs fabriquées dans les années 1960.'
   ,link: "https://fr.wikipedia.org/wiki/Whirlwind_I"
  ,image: WHIRL1},

  {title: ' PDP-8 de DEC '
   ,story: 'Le PDP-8 de DEC considéré par beaucoup comme le tout premier mini-ordinateur qui ait vraiment compté. Ce modèle fut le premier "minicomputer" à avoir vraiment du succès puisqu’il s’en vendit plus de 50 000, c’est-à-dire plus qu’aucun autre ordinateur produit avant et lors de cette période. Le succès du PDP-8 reposait sur sa petite taille et son prix réduit ($18 000).'
   ,link: "https://fr.wikipedia.org/wiki/PDP-8"
  ,image: PDP8},

]

class AnecPage extends Component {

  state = {
    anecdoteIndex: 0,
    faved: false
  }

  favoris(id) {
    var favoris = require("./anecdotes/Favoris.json");
    var RNFS = require('react-native-fs');
    var filePathFav = RNFS.DocumentDirectoryPath + '/anecdotes/Favoris.json';
    this.setState({faved: !this.state.faved})
    if(favoris.IDFavoris.indexOf(id) == -1) {

          favoris.IDFavoris.push(id);

          }
    RNFS.writeFile(filePathFav, JSON.stringify(favoris), 'utf8')
              .then((success) => {
                console.log('SUCCESS - Favoris.json modified');
              })
              .catch((err) => {
                console.log(err.message);
              });
    }


  getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min +1)) + min;
  }

  getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return [d.getUTCFullYear(), weekNo];
  }
  // To access week number, access the second element of result array
  // i.e. result[1] returns getWeekNumber(new Date()) weekNo
  result = this.getWeekNumber(new Date());


  memoryTime(){
     var customData = require("./anecdotes/DATASS.json");
     var customDataTime = require("./anecdotes/TIME.json");
     var RNFS = require('react-native-fs');
     var filePathTime = RNFS.DocumentDirectoryPath + '/anecdotes/TIME.json';
     console.log('filePathTime : ' + filePathTime);
     var weekNb = this.result[1]
     const {anecdoteIndex} = this.state

     if(weekNb !=customDataTime.WeekNumber[0])
     {
           customDataTime.WeekNumber[0]=weekNb;

           console.log('type: ' + typeof(JSON.stringify(customDataTime)));

           RNFS.writeFile(filePathTime, JSON.stringify(customDataTime), 'utf8')
               .then((success) => {
                 console.log('SUCCESS - TIME.json');
               })
               .catch((err) => {
                 console.log(err.message);
               });
               var customDataTime = require("./anecdotes/TIME.json");
             console.log('OK');
             IDanecdote= Math.floor(Math.random() * (5 +1)) + 0 ;
              console.log(IDanecdote);
              while (customData.Lu.indexOf(IDanecdote) > 0) {
                   IDanecdote=Math.floor(Math.random() * (5 +1)) + 0 ;

              }
              console.log(IDanecdote);

              customData.Lu.push(IDanecdote);
              customData.NonLu = customData.NonLu.filter(item => item !== IDanecdote);

              this.setState({ anecdoteIndex: IDanecdote })

              console.log('Lu ' + customData.Lu);
              console.log('Non Lu ' + customData.NonLu);
            var RNFS = require('react-native-fs');
            var filePathData = RNFS.DocumentDirectoryPath + '/anecdotes/DATASS.json';
            console.log('filePathData : ' + filePathData);

            console.log(typeof(JSON.stringify(customData)));

            RNFS.writeFile(filePathData, JSON.stringify(customData), 'utf8')
                .then((success) => {
                  console.log('SUCCESS - DATASS.json');
                })
                .catch((err) => {
                  console.log(err.message);
                });
     }

   return  setTimeout(() => {console.log('weekNb:' + customDataTime.WeekNumber);}, 0.5);

  }

  render() {

    const {anecdoteIndex} = this.state

    return (
      <>
      <View style={{flex: 1, backgroundColor: '#e0e0e0'}}>
         <View style={{flex: 10}, styles.centerElements}>
               <Text style={styles.titleStyle}>
                       {anecdotes[anecdoteIndex].title}
               </Text>
         </View>

         <View style={{flex: 30, resizeMode: 'cover'}}>
               <Image
               style={{marginTop: 10, flex: 1, width: null, height: null, resizeMode: 'contain'}}
               source={anecdotes[anecdoteIndex].image}/>
         </View>

         <View style={{flex: 50, marginBottom: 10}}>
               <Text style={{ fontSize: 15, padding: 20, textAlign: 'justify'}}>
                     {anecdotes[anecdoteIndex].story}
               </Text>
         </View>

         <View style={styles.linkContainer}>
                <Text style={styles.linkStyle} onPress={ ()=> Linking.openURL( anecdotes[anecdoteIndex].link
                ) } >
                 Pour en savoir plus.
                </Text>
         </View>

         <View style={{ flex: 10 , justifyContent: 'center'}}>
               <Button color="#cf1456" title="J'ai de la chance !" onPress={() => this.memoryTime()} />
               <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Button style={{ marginRight: 20 }} color="#ffa600" title="Favoris" onPress={() => this.favoris(anecdoteIndex)} />
                {
                  this.state.faved ? <Icon style={{ marginLeft: 20 }} name="heart" size={25} color="#cf1456" /> : <Icon style={{ marginLeft: 20 }} name="hearto" size={25} color="#cf1456" />
                }
              </View>
         </View>

       </View>
      </>
    )
  }
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  sectionTitle: {
    flex: 1,
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
    textAlign: 'center',
  },
  centerElements: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkContainer: {
   flex: 5,
   marginTop: 15,
   justifyContent: 'center',
   alignItems: 'center',
  },
  titleStyle: {
   marginTop: 30,
   fontWeight: 'bold',
   textAlign: 'center',
   fontSize: 30,
   color: '#cf1456',
  },
  linkStyle: {
   color: '#4287f5',
   textDecorationLine: 'underline',
  }
});

export { AnecPage }
