import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

//login stack
export default function Login({ navigation }) {
  const [userName, setUserName] = useState('hruday@gmail.com');
  const [password, setPassword] = useState('hruday123');

  //user details
  const userDetails = {
    username: 'hruday@gmail.com',
    password: 'hruday123',
  };

  const validate = () => {
    if (password === '' || userName === '') {
      alert('Please enter the details');
    } else {
      authenticateUser();
    }
  };

  const authenticateUser = () => {
    if (
      userDetails.username === userName &&
      userDetails.password === password
    ) {
      navigation.navigate('EmployeeList')
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.title}>APPINESS</Text>
        </View>
        <View style={{padding: 8}}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(text) => setUserName(text)}
            value={userName}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity style={styles.loginBtn} onPress={validate}>
            <Text style={styles.loginTxt}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: 42,
    marginBottom: 40,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  loginBtn: {
    width: '100%',
    backgroundColor: 'black',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    borderRadius: 6,
  },
  loginTxt: {
    fontWeight: 'bold',
    color: 'white',
  },
});
