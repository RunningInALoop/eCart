import React from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity
} from "react-native";

export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;

  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price,0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      {cartItems.map((item, index) => (
        <View style = {{flexDirection :"row" }}>
          <Text> {item.name}</Text>
        
          <TouchableOpacity onPress={() => onRemove(item)}>
              <Text>-</Text>
            </TouchableOpacity>
          <Text>{}</Text>
          <TouchableOpacity onPress={() => onAdd(item)}>
              <Text>+</Text>
            </TouchableOpacity>
           
          <View>
            <Text>{" "}</Text>
            <Text>
              {item.qty} x Rs.{item.price.toFixed(2)}{" "}
            </Text>
            <Text>{" "}</Text>
          </View>
          </View>
      ))}

          <View>
            <Text> Items Price</Text>
            <Text> Rs. {itemsPrice.toFixed(2)}</Text>
            <Text>Tax Price</Text>
            <Text> Rs.{taxPrice.toFixed(2)}</Text>
            <Text>Shipping Price</Text>
            <Text> Rs.{shippingPrice.toFixed(2)}</Text>
            <Text>Total Price</Text>
            <Text> Rs.{totalPrice.toFixed(2)}</Text>
            
          </View>
        
     
       <Button
              onPress={() => {
                alert("Checking out!");
              }}
              title="Checkout"
            />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  title: {
    marginTop: 10,
  },
});
