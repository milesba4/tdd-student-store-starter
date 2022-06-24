import * as React from "react"
import ProductView from "../ProductView/ProductView"
import NotFound from "../NotFound/NotFound"
import { useParams } from "react-router-dom"
import axios from "axios"
export default function ProductDetail({error,setError,shoppingCart,products, handleOnToggle,handleAddItemToCart,handleRemoveItemToCart,isFetching,setIsFetching}) {
const [product, setProduct] = React.useState({})

//extracting productId from URL
const { productId } = useParams()

React.useEffect(async() => {
    try{
        const response = await axios.get("http://localhost:3001/store/" + productId)
        console.log("fetch response = ",response) // checking response
        if(response){
        setProduct(response.data.product)
        console.log("rdp=",response.data.product)
        setIsFetching(false)}
    }
    catch (error){
        setIsFetching(false)
        setError(error)
    return <NotFound />
    }}, []);
)
 }