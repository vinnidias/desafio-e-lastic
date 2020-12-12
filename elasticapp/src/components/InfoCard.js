import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import styles from '../styles'

const InfoCard = ({ icon, description, numbers }) => {
    return (

        <View style={styles.infoCardContainer}>
            <Text>
                {icon}
            </Text>
            <Text>
                {description}
            </Text>
            <Text>
                {numbers}
            </Text>
        </View>
    )
};

export default InfoCard