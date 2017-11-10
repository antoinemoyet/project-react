import React, { Component } from 'react';
import {AppRegistry, StyleSheet, View, Image, Text, TouchableWithoutFeedback, Dimensions, Modal, } from 'react-native';
import SampleScreen from './SampleScreen';
import ImageElement from './ImageElement';
import Unsplash from 'unsplash-js/native';

import dummy from './dummy';

const unsplash = new Unsplash({
  applicationId: "c63ff4fbb2809e37403d23e63de43f9dc0ae75d83236fcf456c2e5f4df138cbe",
  secret: "10151377e70cb6f84f88ad07f377d8058db9d67caa37ba542072dfdabe37c3de",
  callbackUrl: "http//localhost:8081"
});

//const News = () => <ImageElement/>

export default class ImageGallery extends Component {

state = {
        modalVisible: false,
        modalImage: {},
        images: [],
    }

    componentDidMount() {
    	// @TODO
  			//  unsplash.photos.listPhotos(2, 15, "latest")
			// .then(rep => {
			// 	console.log(rep);
			// 	rep.json()
			// })
			// .then(photos => {
			// 	console.log(photos);
			// 	// this.setState({ images: photos });
			// });
			this.setState({ images: dummy });
    }

    setModalVisible(visible, image) {
        this.setState({ modalImage: image });
        this.setState({ modalVisible: visible });
    }

    getImage() {
       return this.state.modalIamge;
    }

    render() {

        let images = this.state.images.map((val, key) => {
            return <TouchableWithoutFeedback key={key} 
                        onPress={() => { this.setModalVisible(true, val)}}> 
                        <View style={styles.imagewrap}>
                            <ImageElement imgsource={val.urls.thumb}></ImageElement>
                        </View>
                    </TouchableWithoutFeedback>
        });

        return (
             <View style={styles.container}>
                 <Modal style={styles.modal} animationType={'fade'}
                        transparent={true} visible={this.state.modalVisible}
                        onRequestClose={() => {}}>

                        <View style={styles.modal}>
                            <Text style={styles.text}
                                onPress={() => {this.setModalVisible(false)}}>Close</Text>
                             {this.state.modalImage && <ImageElement image={this.state.modalImage.full}></ImageElement>}
                        </View>
                 </Modal>
                 {images}
             </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        // For iOS status bar, we need a marginTop of 20.
        marginTop: 20,
    },
    imagewrap: {
        margin: 2,
        padding: 2,
        height: (Dimensions.get('window').height/3) - 12,
        width: (Dimensions.get('window').width/2) - 4,
        backgroundColor: '#fff',
    }, 
    modal: {
        flex: 1,
        padding: 40,
        backgroundColor: 'rgba(0,0,0, 0.9)'
    },
    text: { 
       color: '#fff',
    }

});

AppRegistry.registerComponent('ImageGallery', () => ImageGallery);

