import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import navStyle from './style/navStyle'
import Post from './Post'
// import Movies from './Movies'
import AllUsers from './Users'


export default class Wrapper extends React.Component {
  constructor(props) {
    super(props)

    this.client = new ApolloClient({
      // uri: "http://localhost:5000/graphql",
      // uri: "http://localhost:4466"
      uri: "http://115.159.117.60:4000/"
    });
  }

  render() {
    return (
      <ApolloProvider client={this.client}>
        <CustomizedStackNavigation />
      </ApolloProvider>
    )
  }
}

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
        <AllUsers /> 
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

const CustomizedStackNavigation = createStackNavigator({
  Home: {
    screen: App,
  },
  Post: {
    screen: Post,
  }
})
