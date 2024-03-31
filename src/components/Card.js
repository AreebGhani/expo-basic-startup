import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import themeStyles from '../styles/theme';

const Card = ({ product }) => {
    const navigation = useNavigation();
    const { bgColor, textColor } = themeStyles();

    const handleProductDetail = (product) => {
        navigation.navigate('Product Detail', { product });
    };

    return (
        <TouchableOpacity
            style={[styles.card, bgColor]}
            onPress={() => handleProductDetail(product)}
        >
            <Image source={{ uri: product.thumbnail }} style={styles.thumbnail} />
            <View style={styles.details}>
                <Text style={[styles.title, textColor]}>{product.title}</Text>
                <Text style={styles.price}>${product.price}</Text>
                <Text style={[styles.capitalText, textColor]}>Brand: {product.brand}</Text>
                <Text style={[styles.capitalText, textColor]}>Category: {product.category}</Text>
                <Text style={[styles.capitalText, textColor]}>Rating: {product.rating}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Card;

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 8,
    },
    thumbnail: {
        width: 140,
        height: 140,
        borderRadius: 10,
        marginRight: 10,
    },
    details: {
        flex: 1,
    },
    capitalText: {
        textTransform: 'capitalize'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green',
    },
});
