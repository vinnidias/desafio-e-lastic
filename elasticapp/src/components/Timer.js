import React from 'react'
import {View, Text} from 'react-native'
import styles from '../styles'

const Timer = ({time})=> {
    return(
        <View style={styles.timerContainer}>
            <Text style={styles.infoText}>
                ⏱️ {time}s
            </Text>
        </View>
    )
}

export default Timer