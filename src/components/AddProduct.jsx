import {useEffect, useRef, useState} from "react";
import fireDB from "../assets/js/firebase";

const initState = {
   name: "",
   image: "",
   price: 0,
   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet culpa cum distinctio dolor esse laboriosam modi nemo obcaecati unde voluptate! Commodi distinctio doloribus quisquam velit voluptate. Delectus eveniet nisi quasi ut. Accusamus culpa doloribus et iste itaque perferendis voluptate. Autem consectetur dolorum enim excepturi ipsum odit qui quos sint veniam."
}

export const AddProduct = ({selectedProduct}) => {
   const [product, setProduct] = useState(initState);
   const [isEdit, setIsEdit] = useState(false);
   const productItem = fireDB.database().ref("product")

   useEffect(() => {
      if (selectedProduct) {
         setProduct(selectedProduct);
         setIsEdit(true)
      }
   }, [selectedProduct]);


   function handleInput(e) {
      let {name, value} = e.target
      setProduct({
         ...product,
         [name]: value
      })
   }

   function saveProduct() {
      productItem.push(product)
      setProduct(initState)
   }

   async function updateProduct(){
      const value = {}
      value[product.id] = product;
      await productItem.update(value,(err) => {
         if (err){
            console.log(err)
         }
      });
      setProduct(initState)
      setIsEdit(false);
   }

   return (
      <div className="shadow p-3 mt-4 bg-white">
         <div className="alert alert-primary fs-6 fw-bold" role="alert">
            {isEdit ? 'Edit Product' : 'Add New'}
         </div>
         <div className="form-input mb-4 mt-4">
            <input
               className="text-input"
               type="text"
               placeholder=" "
               name="name"
               value={product.name}
               onChange={handleInput}
            />
            <label htmlFor="">Name</label>
         </div>
         <div className="form-input mb-4 mt-4">
            <input
               className="text-input"
               type="text"
               placeholder=" "
               name="image"
               value={product.image}
               onChange={handleInput}
            />
            <label htmlFor="">Image</label>
         </div>
         <div className="form-input mb-4">
            <input
               className="text-input"
               type="number"
               placeholder=" "
               name="price"
               value={product.price}
               onChange={handleInput}
            />
            <label htmlFor="">Price</label>
         </div>
         <div className="form-input mb-2">
            <textarea
               className="text-input"
               placeholder=" "
               name="description"
               value={product.description}
               onChange={handleInput}

            />
            <label htmlFor="">Description</label>
         </div>
         <div className="form-input">
            {
               isEdit ? <button onClick={updateProduct}>Edit Product</button> :
                  <button onClick={saveProduct}>Save Product</button>
            }
         </div>
      </div>
   )
}