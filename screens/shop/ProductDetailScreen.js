import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Image,
  Switch,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";

const ProductDetailScreen = (props) => {
  const productId = props.navigation.getParam("productId");

  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: selectedProduct.imageUrl }}
        />
      </View>
      <Button title="Add To Cart" onPress={() => {}} />
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

const isDarkMode = false;

const changeModeHandler = () => {
  isDarkMode === true ? (isDarkMode = false) : (isDarkMode = true);
};

ProductDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("productTitle"),
    headerRight: () => (
      <Switch value={isDarkMode} onValueChange={changeModeHandler} />
    ),
  };
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: isDarkMode === true ? "black" : "yellow",
  },
  imageContainer: {
    height: 300,
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
  description: {
    marginHorizontal: 20,
    color: Colors.text,
  },
});
