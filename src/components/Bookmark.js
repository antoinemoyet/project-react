import React, {Component} from 'react';
import SampleScreen from './SampleScreen';
import Unsplash from 'unsplash-js/native';
import { AppRegistry, StyleSheet, View, Image, Text, TouchableWithoutFeedback, Dimensions, Modal, } from 'react-native';

const Bookmark = () => <SampleScreen title={''} />

class bookmark extends Component {
     constructor(props) {
		super(props);
		let favoritebookmarkData = [];
		favoritebookmarkData.push(this.props.topicNames)			
		
		this.state = {
			favoritebookmarkData: favoritebookmarkData
		};
	}
     componentWillReceiveProps(nextProps){
		let favoritebookmarkData = [];
		favoritebookmarkData.push(this.props.topicNames)
					
		this.setState({favoritebookmarkData});
	}
     render() {
			return (
				<View key={"Bookmark"}>
					<ImageElement imgsourceData={this.state.favoritebookmarkData} openSubCat={this._openSubCat} parentKey={"Bookmark"} />
				</View>
			);
		}
 }

export default Bookmark;
