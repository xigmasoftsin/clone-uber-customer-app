import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
export default Header = ({ heading }) => {
    return (
        <View style={styles.headerWrapper}>
            <Text style={styles.headerHeading}>{heading}</Text>
        </View>
    )
}