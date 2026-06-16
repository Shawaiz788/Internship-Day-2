import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Stack } from 'expo-router'

const httpLink = createHttpLink({
  uri: 'https://api.escuelajs.co/graphql',
})

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('token')
  console.log('TOKEN BEING SENT IN HEADER:', token)  // debug line
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: { fetchPolicy: 'network-only' },
    query: { fetchPolicy: 'network-only' },
  }
})

export default function RootLayout() {
  return (
    <ApolloProvider client={client}>
      <Stack screenOptions={{ headerShown: false }} />
    </ApolloProvider>
  )
}