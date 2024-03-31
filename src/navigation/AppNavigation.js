import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext'
import DrawerNavigation from './DrawerNavigation';

const AppNavigation = () => {
    const { theme } = useTheme();

    return (
        <>
            <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
            <NavigationContainer>
                <DrawerNavigation />
            </NavigationContainer>
        </>
    )
}

export default AppNavigation