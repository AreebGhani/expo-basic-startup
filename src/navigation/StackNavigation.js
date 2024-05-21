import { createStackNavigator } from '@react-navigation/stack';
import { Home, ProductDetail, Cart } from '../screens';

const Stack = createStackNavigator();

const StackNavigation = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
            <Stack.Screen name="HomeStack" component={Home} />
            <Stack.Screen name="Product Detail" component={ProductDetail} />
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    )
}

export default StackNavigation
