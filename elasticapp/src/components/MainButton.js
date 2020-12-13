import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../styles'

const MainButton = ({ onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.mainButton}>
                <Text style={styles.buttonText}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default MainButton