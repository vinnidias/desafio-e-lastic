
import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import styles from './src/styles'
import InfoCard from './src/components/InfoCard'



const App = () => {
  return (
    <View style={styles.mainContainer}>

      <View style={styles.headerContainer}>
        <Image
          source={require('./src/images/logo-color-small.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.infoContainer}>
        <InfoCard
          icon={'🚩'}
          description={'SERIES'}
          numbers={'0/1'}
        />

        <InfoCard
          icon={'🔄'}
          description={'REPETIÇÕES'}
          numbers={'0/1'}
        />

        <InfoCard
          icon={'⚖️'}
          description={'PESO'}
          numbers={'0.00 kg'}
        />

        <InfoCard
          icon={'💪🏽'}
          description={'MÁXIMO'}
          numbers={'0.00 kg'}
        />

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