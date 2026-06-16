import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { router } from 'expo-router'
import { useQuery, gql } from '@apollo/client'


const GET_COUNTRIES = gql`
  query {
    countries {
      name
      capital
      emoji
    }
  }
`

const Home = () => {

  const { loading, error, data } = useQuery(GET_COUNTRIES)

  if (loading) return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0c92ff" />
    </View>
  )

  if (error) return (
    <View style={styles.container}>
      <Text>Error: {error.message}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Countries</Text>

      <FlatList
        data={data.countries}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.flag}>{item.emoji}</Text>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.capital}>{item.capital}</Text>
            </View>
          </View>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={() => router.replace('/(tabs)/login')}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#0c92ff', marginBottom: 16, textAlign: 'center' },
  card: { flexDirection: 'row', alignItems: 'center', padding: 12, borderBottomWidth: 1, borderColor: '#eee', gap: 12 },
  flag: { fontSize: 30 },
  name: { fontSize: 16, fontWeight: 'bold', color: '#222' },
  capital: { fontSize: 13, color: '#888' },
  button: { margin: 16, backgroundColor: '#0c92ff', padding: 14, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
})

export default Home