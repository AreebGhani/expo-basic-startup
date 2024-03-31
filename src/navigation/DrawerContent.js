import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import themeStyles from '../styles/theme';
import { doSignOut } from '../firebase/auth';

const DrawerContent = (props) => {
  const navigation = useNavigation();
  const { userLoggedIn } = useAuth();
  const { theme } = useTheme();
  const { bgColor, textColor } = themeStyles();

  const itemBgColor = theme === 'light' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)';

  const handleLogout = async () => {
    Alert.alert(
      'Logout Now',
      'Are you sure you want to proceed?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Yes',
          onPress: async () => {
            await doSignOut();
            navigation.navigate("Login");
          }
        }
      ]
    );
  };

  return (
    <View
      style={[styles.container, bgColor]}
    >
      <DrawerContentScrollView>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require("../../assets/favicon.png")}
          />
        </View>
        <DrawerItem
          style={[styles.item, { backgroundColor: itemBgColor }]}
          label={() => <Text style={[styles.text, textColor]}>Home</Text>}
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
        {userLoggedIn ?
          <>
            <DrawerItem
              style={[styles.item, { backgroundColor: itemBgColor }]}
              label={() => <Text style={[styles.text, textColor]}>Dashboard</Text>}
              onPress={() => {
                navigation.navigate("Dashboard");
              }}
            />
            <DrawerItem
              style={[styles.item, { backgroundColor: itemBgColor }]}
              label={() => <Text style={[styles.text, textColor]}>Logout</Text>}
              onPress={handleLogout}
            />
          </>
          :
          <>
            <DrawerItem
              style={[styles.item, { backgroundColor: itemBgColor }]}
              label={() => <Text style={[styles.text, textColor]}>Login</Text>}
              onPress={() => {
                navigation.navigate("Login");
              }}
            />
            <DrawerItem
              style={[styles.item, { backgroundColor: itemBgColor }]}
              label={() => <Text style={[styles.text, textColor]}>Register</Text>}
              onPress={() => {
                navigation.navigate("Register");
              }}
            />
          </>
        }
      </DrawerContentScrollView>
    </View>
  );
}

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 16,
    marginBottom: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  item: {
    borderRadius: 20,
  },
  text: {
    marginLeft: 26,
    textAlign: 'center',
  }
});
