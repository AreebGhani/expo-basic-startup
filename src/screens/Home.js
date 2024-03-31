import React, { useEffect, useState } from 'react';
import {
    Text, View, StyleSheet,
    FlatList, ActivityIndicator,
    RefreshControl
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import themeStyles from '../styles/theme';
import axios from 'axios';
import { server } from '../constants';
import Card from '../components/Card';

const Home = () => {
    const { bgColor, textColor } = themeStyles();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [products, setProducts] = useState([]);
    const [skip, setSkip] = useState(0);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const savedProducts = await AsyncStorage.getItem('products');
                if (savedProducts) {
                    setProducts(JSON.parse(savedProducts));
                } else {
                    const { data } = await axios.get(`${server}/products?limit=10&skip=${skip}`);
                    setProducts(data.products);
                    await AsyncStorage.setItem('products', JSON.stringify(data.products));
                }
            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        };
        fetchProducts();
    }, []);

    const onRefresh = async () => {
        setRefreshing(true);
        const next = skip + 10;
        setSkip(next);
        try {
            const { data } = await axios.get(`${server}/products?limit=10&skip=${next}`);
            setProducts(data.products);
            await AsyncStorage.setItem('products', JSON.stringify(data.products));
        } catch (error) {
            setError(error.message);
        }
        setRefreshing(false);
    };

    const renderItem = ({ item, index }) => (
        <>
            {index === 0 && <Text style={[styles.refresh, textColor]}>»</Text>}
            <Card product={item} />
        </>
    );

    if (loading) {
        return (
            <View style={[styles.container, bgColor, { paddingTop: 30 }]}>
                <ActivityIndicator size="large" color="blue" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={[styles.container, bgColor]}>
                <Text style={styles.errorText}>Error: {error}</Text>
            </View>
        );
    }

    return (
        <View style={[styles.container, bgColor]}>
            <FlatList
                data={products}
                renderItem={renderItem}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    refresh: {
        textAlign: 'center',
        fontSize: 20,
        marginLeft: 10,
        marginVertical: 4,
        transform: [{ rotate: '90deg' }],
    },
    errorText: {
        color: 'red',
    },
});
