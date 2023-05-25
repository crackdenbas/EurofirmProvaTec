import React, { useState,useContext,useEffect } from 'react';
import {FlatList, Image,Pressable, Text, View } from 'react-native';
import { styles } from '../styles/globalStyle'
import { ProductContext, UserContext } from '../App';
import { GetAllProducts } from '../functions/GetAllProducts';
import { IProduct, IProductList } from '../functions/Interfaces';
import { ExitApp } from '../functions/ExtiApp';



export default function Products({navigation}:any) {

const DEFAULT_IMAGE = 'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg'
const [products, setProducts] = useState<IProductList>({} as IProductList)
const user = useContext(UserContext)

// Pop up to exit app
// ExitApp
// const pageBlur = () => {
//    ExitApp.remove()
// }

const product = useContext(ProductContext)
    useEffect(() => {
        GetAllProducts().then((productList:IProductList | null) => {
            setProducts(productList as IProductList)
        })
        // Local Dummy JSON
        // setProducts(ProductsList as IProductList)
    }, [])

    const ProductSelected = (productData:IProduct) => {
        product.toggleProduct(productData)
        navigation.navigate('ProductDetail')
    }

    const CustomList = (productList : IProductList) => {
    return (
     <FlatList data={productList.products} showsVerticalScrollIndicator={false}  renderItem={({item}) => (
        <Pressable
              style={styles.productPressable}
              onPress={() => {ProductSelected(item)}}
            >
              <Image
                source={{ uri: item.images[0] ? item.images[0] : DEFAULT_IMAGE  }}
                style={styles.productImage}
              />
              <View>
                <Text style={styles.productTitle}>
                  {item.title}
                </Text>
                <Text style={styles.productType}>
                  {item.category}
                </Text>
              </View>
            </Pressable>
        
        )} />
    )}


  return (
    <View style={{flex: 1,backgroundColor: "#fff", justifyContent:'flex-start'}}>
        <View style={styles.header}>
            <Text style={[styles.headerText,{ justifyContent: "center",alignSelf: "center",}]}>Hola {user.user.name}</Text>
            <View style={{width:'90%'}}>
            {CustomList(products )}
            </View>
        </View>
    </View>
  );

}
