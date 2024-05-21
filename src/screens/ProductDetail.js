import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import themeStyles from "../styles/theme";
import { SliderBox } from "react-native-image-slider-box";

const ProductDetail = ({ route }) => {
  const navigation = useNavigation();
  const { product } = route.params;
  const { bgColor, textColor } = themeStyles();

  const handleBuy = () => {
    navigation.navigate("Cart", { product });
  };

  return (
    <ScrollView style={[styles.container, bgColor]}>
      <View style={styles.imageSliderContainer}>
        <SliderBox
          images={product.images}
          sliderBoxHeight={350}
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          paginationBoxVerticalPadding={20}
          autoplay
          circleLoop
        />
      </View>
      <View style={[styles.detailsContainer, bgColor]}>
        <View style={styles.flex}>
          <Text style={[styles.title, textColor]}>{product.title}</Text>
          <Text style={styles.price}>Price: ${product.price}</Text>
        </View>
        <Text style={[styles.description, textColor]}>
          Description: {product.description}
        </Text>
        <Text style={[styles.details, textColor]}>Brand: {product.brand}</Text>
        <Text style={[styles.details, textColor]}>
          Category: {product.category}
        </Text>
        <Text style={[styles.details, textColor]}>
          Rating: {product.rating}
        </Text>
      </View>
      <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
        <Text style={styles.buyButtonText}>Buy Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  imageSliderContainer: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  detailsContainer: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 13,
    marginBottom: 10,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "green",
  },
  details: {
    fontSize: 13,
    margin: 5,
    textTransform: "capitalize",
  },
  buyButton: {
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
