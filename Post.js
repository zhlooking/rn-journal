import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import navStyle from './style/navStyle'


export default class Post extends React.Component {
  static navigationOptions = {
    title: 'Post',
    ...navStyle,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the post page</Text>
      </View>
    )
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
