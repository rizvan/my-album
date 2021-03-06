/* @flow */
/*eslint-disable prefer-const */

import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";

import {
  Text,
  ScrollView
} from "react-native";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchData());
  }
  render() {    
    return (
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>{this.props.isFetching ? "Loading" : this.props.message}</Text>
      </ScrollView>
    );
  }
}

App.propTypes = {
  dispatch: React.PropTypes.func,
  message: React.PropTypes.string,
  isFetching: React.PropTypes.bool
};

App.defaultProps = {
  dispatch: () => {},
  isFetching: false,
  message: ""
};

export default connect((state) => ({
  isFetching: state.data.isFetching,
  message: state.data.message
}))(App);
