import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../styles'

const ExerciseList = ({ list, onBackPress, onFrontPress }) => {
    return (
        <View style={styles.exerciseList}>
            <TouchableOpacity onPress={onBackPress}>
                <Text style={styles.exerciseTextButton}>
                    {'<'}
                </Text>
            </TouchableOpacity>

            <Text style={styles.exerciseText}>
                {list}
            </Text>

            <TouchableOpacity onPress={onFrontPress}>
                <Text style={styles.exerciseTextButton}>
                    {'>'}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ExerciseList