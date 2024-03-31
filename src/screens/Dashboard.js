import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import themeStyles from '../styles/theme';

const Dashboard = () => {
  const navigation = useNavigation();
  const { loading, userLoggedIn, currentUser, } = useAuth();
  const { bgColor, textColor } = themeStyles();

  if (loading) {
    return (
      <View style={[styles.container, bgColor, { paddingTop: 30 }]}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  useEffect(() => {
    if (!loading && !userLoggedIn) {
      navigation.navigate('Login');
    }
  }, []);

  return (
    <View style={[styles.container, bgColor]}>
      {userLoggedIn &&
        <View style={styles.userDetail}>
          <Text style={[styles.text, textColor]}>Email: {currentUser.email}</Text>
        </View>
      }
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  userDetail: {
    padding: 20,
  },
  text: {
    fontSize: 16,
  }
})
