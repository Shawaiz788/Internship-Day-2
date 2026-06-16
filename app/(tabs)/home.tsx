import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'

 
const Home = () => {

 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <TouchableOpacity onPress={()=>router.replace('/(tabs)/login')}>
        <Text style={styles.logout}>Move To Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9', paddingHorizontal: 16, paddingTop: 52 },
  title:     { fontSize: 22, fontWeight: '700', color: '#111', marginBottom: 16 },
  logout:    { textAlign: 'center', color: '#0c92ff', fontSize: 15, fontWeight: '600', paddingVertical: 20 },
})

export default Home