import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import themeStyles from "../styles/theme";

const Cart = () => {
  const route = useRoute();
  const { product } = route.params;
  const { bgColor, textColor } = themeStyles();

  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleCheckout = () => {
    Alert.alert("Now it's your time to make payment!");
  };

  const totalPrice = (product && product.price * quantity) || 0;

  return (
    <View style={[styles.container, bgColor]}>
      <Text style={[styles.title, textColor]}>Shopping Cart</Text>
      {product ? (
        <View style={styles.productContainer}>
          <Image source={{ uri: product.thumbnail }} style={styles.image} />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{product.title}</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                onPress={handleDecrease}
                style={styles.quantityButton}
              >
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{quantity}</Text>
              <TouchableOpacity
                onPress={handleIncrease}
                style={styles.quantityButton}
              >
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <Text style={styles.emptyCartText}>Your cart is empty</Text>
      )}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${totalPrice.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.buyButton} onPress={handleCheckout}>
        <Text style={styles.buyButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productDetails: {
    marginLeft: 20,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    backgroundColor: "#ddd",
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "#555",
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 10,
    color: "#555",
  },
  emptyCartText: {
    fontSize: 18,
    color: "#888",
    textAlign: "center",
  },
  totalContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginTop: "auto",
  },
  totalText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  buyButton: {
    marginTop: 20,
    backgroundColor: "#FF9800",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
  },
  buyButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
