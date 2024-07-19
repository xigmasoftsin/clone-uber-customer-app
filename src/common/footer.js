import React from 'react';
import { Text, TouchanbleOpacity, View, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import styles from './styles';
import Octicons from 'react-native-vector-icons/Octicons';
import colors from "../configs/colors";
const ICON_ACTIVE_COLOR = colors.COLOR_ICON;
const ICON_INACTIVE_COLOR = colors.COLOR_GRAY;
const gearIcon = <Octicons name="gear" size={25} color={colors.COLOR_BORDER} />;
export default Footer = () => {
    const [activeMenu, setActiveMenu] = React.useState('Home')
    const setFooterMenu = (menu) => {

    }
    return (
        <View style={styles.footerWrapper}>
            <TouchableOpacity
                onPress={() => setActiveMenu('Home')}
                style={styles.footerIconWrapper}>
                <Octicons name="gear" size={25} color={activeMenu == 'Home' ? ICON_ACTIVE_COLOR : ICON_INACTIVE_COLOR} />
                <Text style={styles.footerMenuLabel}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setActiveMenu('Services')}
                style={styles.footerIconWrapper}>
                <Octicons name="gear" size={25} color={activeMenu == 'Services' ? ICON_ACTIVE_COLOR : ICON_INACTIVE_COLOR} />
                <Text style={styles.footerMenuLabel}>Services</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setActiveMenu('Activity')}
                style={styles.footerIconWrapper}>
                <Octicons name="gear" size={25} color={activeMenu == 'Activity' ? ICON_ACTIVE_COLOR : ICON_INACTIVE_COLOR} />
                <Text style={styles.footerMenuLabel}>Activity</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setActiveMenu('Account')}
                style={styles.footerIconWrapper}>
                <Octicons name="gear" size={25} color={activeMenu == 'Account' ? ICON_ACTIVE_COLOR : ICON_INACTIVE_COLOR} />
                <Text style={styles.footerMenuLabel}>Account</Text>
            </TouchableOpacity>
        </View>
    )
}