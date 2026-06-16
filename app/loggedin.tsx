import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { router } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { gql } from "@apollo/client"
import { useQuery } from "@apollo/client/react"
import React, { useState, useEffect } from 'react'

const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      email
      name
      avatar
    }
  }
`

const handleLogout = async () => {
  await AsyncStorage.removeItem('token')
  router.replace('/(tabs)/login')
}

const Home = () => {
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        const base64 = token.split('.')[1]
        const decoded = JSON.parse(atob(base64))
        setUserId(String(decoded.sub))
      }
    })
  }, [])

  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: userId },
    fetchPolicy: 'network-only',
    skip: !userId
  })

  if (!userId || loading) return <View style={styles.container}><ActivityIndicator color="#0c92ff" /></View>
  if (error) return <View style={styles.container}><Text>Error: {error.message}</Text></View>

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email: {data.user.email}</Text>
      <Text style={styles.text}>Name: {data.user.name}</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' },
  text: { fontSize: 16, color: 'black', marginBottom: 8 },
  button: { marginTop: 20, backgroundColor: '#0c92ff', paddingHorizontal: 40, paddingVertical: 12, borderRadius: 8 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
})

export default Home