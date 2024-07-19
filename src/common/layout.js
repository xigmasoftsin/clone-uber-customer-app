import React from 'react';
import { Text, View } from 'react-native';
import Header from './header';
import Footer from './footer';
export default Layout = ({ children, heading }) => {
    return (
        <View style={{ flex: 1 }}>
            <Header heading={heading} />
            {children}
            <Footer />
        </View>
    )
}