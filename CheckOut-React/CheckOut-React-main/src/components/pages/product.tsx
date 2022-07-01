import { FC } from "react"
import { productList } from '../../data/productlist' 
import ProductCard from "../page-cards/product-card"
import { imgContainer} from "../../css/common"
import { fontFamily, styleHeader } from "../../css/common"


interface Props {}


 const Products : FC<Props> = (props) => {

        return (
         <>
            <div>
                <h2 style={{...fontFamily, ...styleHeader, padding: "20px"}}>
                    Alla Produkter
                </h2>
            </div>
    
            <div style={{...imgContainer}}>
                  {
                       productList.map((product) => 
                            <ProductCard 
                                key={product.id} product={product} /> 
                       ) 
                    }
            </div>
        </>
      )
} 

export default Products



