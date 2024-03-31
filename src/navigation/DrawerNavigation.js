import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import { useTheme } from '../context/ThemeContext';
import { Login, Register, Dashboard } from '../screens';
import BottomTabNavigation from './BottomTabNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    const { theme } = useTheme();

    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
            screenOptions={{
                drawerType: "front",
                headerTintColor: theme === 'light' ? '#000000' : '#FFFFFF',
                headerStyle: {
                    backgroundColor: theme === 'light' ? '#FFFFFF' : '#222222',
                },
            }}
        >
            <Drawer.Screen name="Home" component={BottomTabNavigation} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Register" component={Register} />
            <Drawer.Screen name="Dashboard" component={Dashboard} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation
