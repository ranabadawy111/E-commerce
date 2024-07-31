import React, { useContext } from 'react'
import "./CSS/Product.css"
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../components/Breadcrums/Breadcrum';
import { ProductDisplay } from '../components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../components/DescriptionBox/DescriptionBox';
import { RelatedProduct } from '../components/RelatedProducts/RelatedProduct';
export const Product = () => {
  let {all_product} = useContext(ShopContext);
  let {productId} = useParams(); // return param as string
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrum product= {product}/>
      <ProductDisplay product= {product}/>
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  )
}
export default Product;