import React, { useContext,useRef } from "react";
import {Animated,Image,Text,View, } from "react-native";
import { styles } from "../styles/globalStyle";
import { ProductContext, UserContext } from "../App";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductDetail() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const products = useContext(ProductContext);
  const product = useContext(ProductContext);
  const user = useContext(UserContext);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.scrollContainer,
          { height: "60%", width: "100%", top: 0 },
        ]}
      >
        <ScrollView
          horizontal={true}
          style={styles.scrollContainer}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
        >
          {products.product.images.map((image, imageIndex) => {
            return (
              <Animated.View
                style={styles.productDetailViewImage}
                key={imageIndex}
              >
                <Image
                  source={{ uri: image }}
                  style={styles.productDetailImage}
                />
              </Animated.View>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.containerText}>
        <Text style={styles.productDetailTitle}>{product.product.title}</Text>
        <Text style={styles.productDetailSubtitle}>Description</Text>
        <Text style={styles.productDetailText}>{product.product.description}</Text>
        <Text style={styles.productDetailSubtitle}>Price</Text>
        <Text style={styles.productDetailText}>{product.product.price} €</Text>
        <Text style={styles.productDetailSubtitle}>Hola {user.user.name}</Text>
      </View>
    </SafeAreaView>
  );
}
