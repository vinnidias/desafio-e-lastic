import React from 'react'
import {View, Text} from 'react-native'
import styles from '../styles'

const ForceBar = ()=> {
    return(
        <View style={styles.forceBarContainer}>
            <View style={styles.forceBar}>
                
            </View>
            <View style={styles.textBarContainer}>
                <Text style={styles.infoText}>
                    3.00 kg
                </Text>
                <Text style={styles.infoText}>
                    30.00 kg
                </Text>
            </View>
        </View>
    )
}

export default ForceBar