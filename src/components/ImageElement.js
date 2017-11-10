import React, { Component } from 'react';
import {AppRegistry, StyleSheet, View, Image, text, TouchableWithoutFeedback, Dimensions, Modal, } from 'react-native';
import Unsplash from 'unsplash-js/native';

const unsplash = new Unsplash({
  applicationId: "{c63ff4fbb2809e37403d23e63de43f9dc0ae75d83236fcf456c2e5f4df138cbe}",
  secret: "{10151377e70cb6f84f88ad07f377d8058db9d67caa37ba542072dfdabe37c3de}",
  callbackUrl: "http//localhost:8081"
});

export default class ImageElement extends Component {
    render() {
        return (
            <Image source={{ uri: this.props.imgsource }} style={styles.image}></Image>
        );
    }
}

const styles = StyleSheet.create({
    image: {
    	width: null,
        flex: 1,
        alignSelf: 'stretch',
    }

});