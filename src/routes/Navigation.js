import { StatusBar } from 'expo-status-bar'
import { NavigationContainer, DarkTheme, DefaultTheme, } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from './DrawerContent'
import { useTheme } from '../context/ThemeContext'
import Home from '../screens/Home'
import Login from '../screens/Login'
import Register from '../screens/Register'
import Dashboard from '../screens/Dashboard'
import Settings from '../screens/Settings'
import ProductDetail from '../screens/ProductDetail'

const Drawer = createDrawerNavigator();

const Navigation = () => {
    const { theme } = useTheme();

    return (
        <>
            <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
            <NavigationContainer
                theme={theme === 'dark' ? DarkTheme : DefaultTheme}
            >
                <Drawer.Navigator
                    drawerContent={(props) => <DrawerContent {...props} />}
                    screenOptions={{
                        drawerType: "front",
                        headerTintColor: theme === 'light' ? '#000000' : '#FFFFFF',
                    }}
                >
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name="Login" component={Login} />
                    <Drawer.Screen name="Register" component={Register} />
                    <Drawer.Screen name="Dashboard" component={Dashboard} />
                    <Drawer.Screen name="Settings" component={Settings} />
                    <Drawer.Screen
                        name="Product Detail"
                        component={ProductDetail}
                        options={{ drawerLabel: () => null }}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Navigation
