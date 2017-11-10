import React from 'react';
import SampleScreen from './SampleScreen';
import { AppRegistry, TextInput } from 'react-native';
import { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Search' };
  }

  render() {
    return (
      <TextInput style={{height: 40, top:50, marginLeft:10, marginRight:10, borderColor: 'gray', borderWidth: 1, padding:10, }}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);
