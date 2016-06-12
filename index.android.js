/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { Provider } from "react-redux";
import { AppRegistry, StyleSheet, Text, ScrollView, View } from 'react-native';
import FeedContainer from './js/features/feed/feed-container.js';
import configureStore from "./js/store/configure-store";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionsContainer from './js/features/actions-view/actions-container.js';

const store = configureStore();

class App extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <Provider store={store}>
                <ActionsContainer>
                    <ScrollView>
                        <FeedContainer />
                    </ScrollView>
                </ActionsContainer>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('MyAlbum', () => (App));
