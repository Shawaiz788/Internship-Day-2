import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://countries.trevorblades.com/' }),
  cache: new InMemoryCache(),
})

export default function RootLayout() {
  return (
    <ApolloProvider client={client}>
      <Stack screenOptions={{ headerShown: false }} />
    </ApolloProvider>
  )
}
export const unstable_settings = {
  anchor: '(tabs)',
};


