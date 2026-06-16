import { View, Text ,StyleSheet, TextInput,TouchableOpacity, Modal, ScrollView} from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router';

  const index = () => {
  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');
  const [signupVisible, setSignupVisible] = useState(false);

  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [names, setNames] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const [resetVisible, setResetVisible] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  return (
    
    <View style={styles.container}>
      <View style={styles.box}>
          
          <TextInput style={styles.input} 
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          />

          <TextInput style={styles.input} 
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          />

          <TouchableOpacity style={styles.button}
          onPress={()=>{router.push({
            pathname:'/loggedin',
            params:{email:email,password:password}
          })}}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

         

          <View style={styles.row}>
            <Text style={styles.text}>Don't have an account </Text>
            <TouchableOpacity onPress={() => setSignupVisible(true)}>
              <Text style={styles.link}>Sign up!</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>I Forgot my Password </Text>
            <TouchableOpacity onPress={()=> setResetVisible(true)}>
              <Text style={styles.link}>Reset</Text>
            </TouchableOpacity>
          </View>

          <Modal
        visible={signupVisible}
        animationType="slide"       
        transparent={true}         
        onRequestClose={() => setSignupVisible(false)} 
      >
        
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>

         
            <Text style={styles.modalTitle}>My MarketPlace</Text>

            <ScrollView showsVerticalScrollIndicator={false}>
              <TextInput style={styles.input} 
                      placeholder="Username"
                      value={username} 
                      onChangeText={setUsername} />

              <TextInput style={styles.input} 
              placeholder="Phone Number"
                value={phone} 
                onChangeText={setPhone} 
                keyboardType="phone-pad" />

              <TextInput style={styles.input} 
              placeholder="Email"
                value={signupEmail} 
                onChangeText={setSignupEmail} 
                keyboardType="email-address" />

              <TextInput style={styles.input} 
              placeholder="Full Name"
              value={names} 
              onChangeText={setNames} />

              <TextInput style={styles.input} 
              placeholder="Password"
                value={signupPassword} 
                onChangeText={setSignupPassword} 
                secureTextEntry={true} />

              <TextInput style={styles.input} 
              placeholder="Confirm Password"
              value={confirmPassword} 
              onChangeText={setConfirmPassword} 
              secureTextEntry={true} />

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>SIGNUP</Text>
              </TouchableOpacity>

            
              <View style={styles.row}>
                <Text style={styles.text}>Already have an account </Text>
                <TouchableOpacity onPress={() => setSignupVisible(false)}>
                  <Text style={styles.link}>Sign In!</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>

          </View>
        </View>
      </Modal>


      <Modal
  visible={resetVisible}
  animationType="slide"
  transparent={true}
  onRequestClose={() => setResetVisible(false)}
>
  <View style={styles.modalOverlay}>
    <View style={styles.modalBox}>
   
      <View style={styles.modalHeader}>
        <View style={{ flex: 1 }} />
        <View style={styles.questionBox}>
          <Text style={styles.questionMark}>?</Text>
        </View>
      </View>

      <Text style={styles.resetDescription}>
        Enter your email address below and we'll send you a link to reset your password!
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={resetEmail}
        onChangeText={setResetEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SEND RESET LINK</Text>
      </TouchableOpacity>

      <View style={[styles.row, { marginTop: 12 }]}>
        <Text style={styles.text}>Don't have an account </Text>
        <TouchableOpacity onPress={() => { setResetVisible(false); setSignupVisible(true); }}>
          <Text style={styles.link}>Sign up!</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>or </Text>
        <TouchableOpacity onPress={() => setResetVisible(false)}>
          <Text style={styles.link}>login</Text>
        </TouchableOpacity>
      </View>

    </View>
  </View>
</Modal>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
  alignItems:'center',
  justifyContent:'center',
  color:'blue',
  flex:1,
  backgroundColor:'white',
  
}
,box:{
  width:400,
  height:500,
  backgroundColor:'white',
  borderColor:'#0c92ff',
  borderWidth:2,
  alignItems:'center',
  justifyContent:'center',
  borderRadius:10,
},
input:{
  width:300,
  height:50,
  borderColor:'gray',
  borderWidth:1,
  borderRadius:5,
  paddingHorizontal:10,
  marginBottom:20,
  color:'black',
  fontSize:16,

}
,button: {
  width: 300,
  height: 50,
  backgroundColor: '#0c92ff',
  borderRadius: 5,
  alignItems: 'center',
  justifyContent: 'center',
}
,buttonText: {
  color: 'white',
  fontSize: 18,
  textAlign: 'center',
},


row:{
  flexDirection:'row',
  marginTop:10,
},
text:{
  fontSize:12,
  color:'black',
},
link:{
  fontSize:12,
  color:'#0c92ff',
  fontWeight:'bold',
}
,modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)', 
  justifyContent: 'center',
  alignItems: 'center',
},
modalBox: {
  width: 400,
  backgroundColor: 'white',
  borderColor: '#0c92ff',
  borderWidth: 2,
  borderRadius: 10,
  padding: 24,
  alignItems: 'center',
},
modalTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#0c92ff',
  marginBottom: 20,
},
modalHeader: {
  flexDirection: 'row',
  width: '100%',
  marginBottom: 12,
},
questionBox: {
  width: 28,
  height: 28,
  backgroundColor: '#cc0000',
  borderRadius: 4,
  alignItems: 'center',
  justifyContent: 'center',
},
questionMark: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 16,
},
resetDescription: {
  fontSize: 15,
  color: '#222',
  textAlign: 'left',
  marginBottom: 20,
  lineHeight: 22,
},
})

export default index