import React from 'react'
import { Text, View } from 'react-native'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


const query = gql`{
  newMovies {
    id
    title
  }
}`

class AllUsers extends React.Component {
  constructor(props) {
    super(props)

    console.log('----> constructor props', this.props)
  }

  render() {
    console.log('-----------> props.data ', this.props)
    if (this.props.data.loading) {
      return <Text>loading</Text>
    }

    if (this.props.data.error) {
      return <Text>error</Text>
    }

    const { newMovies } = this.props.data

    return (
      <View>
      {
        newMovies.map(({ id, title }) => (
          <Text key={id}>{`${ id }: ${ title }`}</Text>
        ))
      }
      </View>
    )
  }
}

export default graphql(query)(AllUsers)
