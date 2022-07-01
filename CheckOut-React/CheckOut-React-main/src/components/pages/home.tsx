import { FC } from "react"
import { productList } from '../../data/productlist' 
import { imgContainer} from "../../css/common"
import ProductCard from "../page-cards/product-card"


interface Props {}


 const Home : FC<Props> = (props) => {

        return (
         <>
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

export default Home
