/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { connect } from "react-redux";
import { StyleSheet,View, ScrollView } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import {openActionsMenu, closeActionsMenu} from './actions';

class ActionsContainer extends React.Component {
  constructor (props) {
      super(props);
  }

  toggleMenu() {
    let b = this.refs.actionButton;
    let action = !b.state.active ? openActionsMenu() : closeActionsMenu();
    this.props.dispatch(action);
  }

    render () {
      return (
        <View style={{flex: 1}}>
          <ScrollView style={{opacity: this.props.isOpen ? 0.1 : 1}}>
            {this.props.children}
          </ScrollView>
          <ActionButton ref="actionButton" buttonColor="rgba(231,76,60,1)" onPress={ () => this.toggleMenu(true)}>
              <ActionButton.Item buttonColor='#9b59b6' title="New Picture" onPress={ () => this.toggleMenu(false)}>
                <Icon name="ios-camera-outline" style={styles.actionButtonIcon} />
              </ActionButton.Item>
              <ActionButton.Item buttonColor='#3498db' title="New Video" onPress={ () => this.toggleMenu(false)}>
                <Icon name="ios-videocam-outline" style={styles.actionButtonIcon} />
              </ActionButton.Item>
          </ActionButton>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }
});

ActionsContainer.propTypes = {
  dispatch: React.PropTypes.func,
  isOpen: React.PropTypes.bool
};

ActionsContainer.defaultProps = {
  dispatch: () => {},
  isOpen: false
};

export default connect((state) => ({
  isOpen: state.actions.isOpen
}))(ActionsContainer);
