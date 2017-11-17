import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

class addfavorite extends Component {
  handleFavouritePress = () => {
    if (this.props.isFavourited) {
      this.props.removeFavourite(this.props.image);
    } else {
      this.props.addfavorite(this.props.image);
    }
  }

  render() {
    const { isFavourited } = this.props;

    return (
      <TouchableOpacity style={styles.favourite} onPress={() => this.handleFavouritePress()}>
        <Icon name={isFavourited ? 'star' : 'star-o'} size={25} color="#fff" />
      </TouchableOpacity>
    );
  }
}

addfavorite.propTypes = {
  image: PropTypes.shape({ id: PropTypes.string, urls: PropTypes.shape({ small: PropTypes.string }) }).isRequired,
  isFavourited: PropTypes.bool.isRequired
}

const mapStateToProps = (state, props) => ({
  isFavourited: state.images.favouriteImages.filter(image => image.id === props.image.id).length > 0
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addfavorite,
    removeFavourite
  }, dispatch);
};

export default addfavorite;

const styles = StyleSheet.create({
  favourite: {
    backgroundColor: 'transparent'
  }
});
