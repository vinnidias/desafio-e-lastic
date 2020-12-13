import React from 'react'
import {View, Text} from 'react-native'
import styles from '../styles'

const ExerciseList = ({list}) => {
    return(
        <View style={styles.exerciseList}>
            <Text style={styles.exerciseText}>
                {list}
            </Text>
        </View>
    )
}

export default ExerciseList