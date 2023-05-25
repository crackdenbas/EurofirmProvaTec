import { IProductList } from "./Interfaces";

// This function is used to get all products from the API
// It returns a promise with the product list
export const GetAllProducts = async () => {
    return await fetch('https://dummyjson.com/products',{
        method: 'GET',
    })
    .then((response) => response.json())
    .then((productList:IProductList) => {
        return productList;
    })
    .catch((error) => {
        console.error(error);
        return null;
    })
}