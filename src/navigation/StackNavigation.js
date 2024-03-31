import { createStackNavigator } from '@react-navigation/stack';
import { Home, ProductDetail } from '../screens';

const Stack = createStackNavigator();

const StackNavigation = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
            <Stack.Screen name="HomeStack" component={Home} />
            <Stack.Screen name="Product Detail" component={ProductDetail} />
        </Stack.Navigator>
    )
}

export default StackNavigation
