import React, { createContext } from 'react';

import { IProduct, IUser } from './functions/Interfaces';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './screens/Products';
import ProductDetail from './screens/ProductDetail';


export const UserContext = createContext({} as {user:IUser,toggleUser:Function})
export const ProductContext = createContext({} as {product:IProduct,toggleProduct:Function})

export default function App() {

 const Stack = createNativeStackNavigator();
 
 const [user, setUser] = React.useState<IUser>({} as IUser)
 const [product, setProduct] = React.useState<IProduct>({} as IProduct)

 const toggleUser= (user:IUser) => {
  setUser(user)
 }
 const toggleProduct= (product:IProduct) => {
  setProduct(product)
 }

  return (
    <NavigationContainer>
      <UserContext.Provider value={{user,toggleUser}}>
        <ProductContext.Provider value={{product,toggleProduct}}>
          <Stack.Navigator>
              <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
              <Stack.Screen name="Products" component={Products} options={{headerShown: false}}  />
              <Stack.Screen name="ProductDetail" component={ProductDetail} options={{headerShown: false}}  />
          </Stack.Navigator>
        </ProductContext.Provider>
      </UserContext.Provider>
    </NavigationContainer>
  )
  
}
