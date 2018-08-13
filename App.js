import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import navStyle from './style/navStyle'
import Post from './Post'


class App extends React.Component {
  static navigationOptions = {
    title: 'Home',
    ...navStyle,
  }

  handleGoToPost = () => {
    this.props.navigation.navigate('Post')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello!</Text>
        <Button onPress={this.handleGoToPost} title='Go to Post' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createStackNavigator({
  Home: {
    screen: App,
  },
  Post: {
    screen: Post,
  }
})
