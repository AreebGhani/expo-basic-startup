import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '../context/ThemeContext'
import StackNavigation from './StackNavigation';
import { Settings } from '../screens';
import { StyleSheet, View } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigation = () => {
    const { theme } = useTheme();

    return (
        <Tab.Navigator
            sceneAnimationEnabled={false}
            labeled={false}
            shifting={true}
            barStyle={{
                backgroundColor: theme === 'light' ? '#FFFFFF' : '#222222',
                height: 50,
            }}
            backBehavior='initialRoute'
            activeColor={`${theme === 'light' ? '#0000FF' : '#6161FF'}`}
            inactiveColor={`${theme === 'light' ? '#000000' : '#FFFFFF'}`}
            activeIndicatorStyle={{ backgroundColor: 'transparent' }}
        >
            <Tab.Screen
                name="HomeTab"
                component={StackNavigation}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View style={styles.tabBarIcon}>
                            <MaterialCommunityIcons name="home-outline" color={color} size={26} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="SettingsTab"
                component={Settings}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View style={styles.tabBarIcon}>
                            <MaterialCommunityIcons name="cog" color={color} size={26} />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation

const styles = StyleSheet.create({
    tabBarIcon: {
        position: 'absolute',
        top: -12,
    }
});
