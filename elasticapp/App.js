
import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import styles from './src/styles'



const App = ()=> {
  return(
    <View style={styles.mainContainer}>
      
      <View style={styles.headerContainer}>
        <Image 
          source={require('./src/images/logo-color-small.png')}  
          style={styles.image}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text>
          infos
        </Text>
      </View>

      <View style={styles.exerciseContainer}>
        <Text>
          Exercícios
        </Text>
      </View>

    </View>
  )

};

export default App