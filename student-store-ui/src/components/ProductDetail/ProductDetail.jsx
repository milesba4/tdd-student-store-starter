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

return(
    <div className="product-detail">
        {isFetching && <h1 className="loading">Loading...</h1>}
        {!error && <ProductView product={product} productId={productId} quantity={shoppingCart.find(x => x.itemId === product.id)?.quantity}
          handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} shoppingCart={shoppingCart} />}
        {error && <NotFound />}
      </div>
)
 }
