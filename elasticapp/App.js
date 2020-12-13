import React, { useEffect, useState } from 'react';
import {
  View,
  Image
} from 'react-native';
import styles from './src/styles'
import InfoCard from './src/components/InfoCard'
import ForceBar from './src/components/ForceBar'
import Timer from './src/components/Timer'
import ExerciseList from './src/components/ExerciseList'
import MainButton from './src/components/MainButton'

const App = () => {
  const list = ['Abdominal', 'Flexão de cotovelo', 'Flexão de joelho']
  const [listIndex, setIndex] = useState(0)
  const [series, setSeries] = useState(0)
  const [repetitions, setRepetitions] = useState(0)
  const [maxSeries, setMaxSeries] = useState(3)
  const [maxRepetitions, setMaxRepetitions] = useState(3)
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
          numbers={series + '/' + maxSeries}
        />

        <InfoCard
          icon={'🔄'}
          description={'REPETIÇÕES'}
          numbers={repetitions + '/' + maxRepetitions}
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
        <ForceBar />
        <Timer time={0} />
      </View>
      <ExerciseList
        list={list[listIndex]}
        onBackPress={() => {
          if (listIndex <= 0) {
            setIndex(0)
          } else {
            setIndex(listIndex - 1)
          }
        }}
        onFrontPress={() => {
          if (listIndex >= 2) {
            setIndex(2)
          } else {
            setIndex(listIndex + 1)
          }
        }}
      />
      <View style={styles.buttonsContainer}>
        <MainButton
          title={'INICIAR'}
          onPress={() => {
            if (series >= maxSeries) {
              setSeries(maxSeries)
            }
            if (repetitions >= maxRepetitions) {
              setRepetitions(maxRepetitions)
            } else {
              setSeries(series + 1)
              setRepetitions(repetitions + 1)
            }

          }}
        />
        <MainButton
          title={'RESETAR'}
          onPress={() => {
            setSeries(0)
            setRepetitions(0)
          }}
        />
      </View>
    </View>
  )

};

export default App