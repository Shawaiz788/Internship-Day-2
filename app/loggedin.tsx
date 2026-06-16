import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useLocalSearchParams, router } from 'expo-router'

const Home = () => {
  const { email, password } = useLocalSearchParams()
const username = '';
const names = ''; //i guess we use api later
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Username: {username}</Text>
      <Text style={styles.text}>Names: {names}</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.replace('/(tabs)/login')}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    color: 'black',
    marginBottom: 8,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#0c92ff',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
})

export default Home