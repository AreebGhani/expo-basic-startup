import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import themeStyles from '../styles/theme';
import { doSignInWithEmailAndPassword } from '../firebase/auth';

const Login = () => {
  const navigation = useNavigation();
  const { loading: userLoading, userLoggedIn, currentUser, } = useAuth();
  const { theme } = useTheme();
  const { bgColor, textColor, button } = themeStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ success: "", error: "" });

  useEffect(() => {
    if (!userLoading && userLoggedIn) {
      navigation.navigate('Dashboard');
    }
  }, []);

  const handleLogin = async () => {
    if (email === '' || password === '') {
      setMessage({ success: '', error: 'Both fields are required' });
      return;
    }
    setLoading(true);
    try {
      await doSignInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
      setMessage({ success: 'Login Successfully', error: '' });
      setTimeout(() => navigation.navigate('Dashboard'), 2000);
    } catch (error) {
      setMessage({ success: '', error: error.message });
    }
    setLoading(false);
    setTimeout(() => setMessage({ success: '', error: '' }), 3000);
  };

  if (userLoading) {
    return (
      <View style={[styles.container, bgColor, { paddingTop: 30 }]}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <View style={[styles.container, bgColor]}>
      <Text style={[styles.title, textColor]}>Login</Text>
      <TextInput
        style={[styles.input, textColor]}
        placeholderTextColor={theme === 'light' ? 'black' : 'white'}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={[styles.input, textColor]}
        placeholderTextColor={theme === 'light' ? 'black' : 'white'}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      {message.success !== '' && <Text style={styles.successMessage}>{message.success}</Text>}
      {message.error !== '' && <Text style={styles.errorMessage}>{message.error}</Text>}
      <TouchableOpacity style={[styles.button, button.bgColor]} onPress={handleLogin} disabled={loading}>
        {
          loading ? <ActivityIndicator size="large" color={theme === 'light' ? 'white' : 'black'} />
            : <Text style={[styles.buttonText, button.textColor]}>Login</Text>
        }
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'blue',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  successMessage: {
    color: 'green',
    marginBottom: 20,
  },
  errorMessage: {
    color: 'red',
    marginBottom: 20,
  },
});

export default Login;
