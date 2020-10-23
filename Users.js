import React from 'react'
import { Text, View } from 'react-native'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'


export default () => (
  <Query
    query={gql`
    {
      users {
        id
        name
      }
    }
  `}
  >
    {({ loading, error, data }) => {
      if (loading) {
        return <Text>loading</Text>
      }

      if (error) {
        return <Text>error</Text>
      }

      return (
        <View>
          {
            data.users.map(({ id, name }) => (
              <Text key={id}>{`${id}: ${name}`}</Text>
            ))
          }
        </View>
      )
    }}
  </Query>
)
