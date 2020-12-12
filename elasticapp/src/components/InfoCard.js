import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import styles from '../styles'

const InfoCard = ({ icon, description, numbers }) => {
    return (

        <View style={styles.infoCardContainer}>
            <Text style={styles.infoIcon}>
                {icon}
            </Text>
            <Text style={styles.infoText}>
                {description}
            </Text>
            <Text style={styles.infoText}>
                {numbers}
            </Text>
        </View>
    )
};

export default InfoCard