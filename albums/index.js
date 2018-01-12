// Import library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'


// Create component
const App = () => (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Header headerText={'Albums!'} />
        <AlbumList />
    </View>
);

// Render the component to the device
AppRegistry.registerComponent('albums', () => App);
