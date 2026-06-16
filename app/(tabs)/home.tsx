import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native'

const Home = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt:{color:'white',fontSize:20}
})

export default Home