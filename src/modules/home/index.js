import React from 'react';
import { Text, View } from 'react-native';
import Layout from '../../common/layout';
export default Home = ({ heading }) => {
    return (
        <Layout heading={heading}>
            <View style={{ flex: 1, backgroundColor: 'blue' }}>
                <Text>Welcome Home!</Text>
            </View>
        </Layout>
    )
}