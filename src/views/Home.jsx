import {useEffect, useState} from "react";
import fireDB from "../assets/js/firebase";
import "../assets/css/home.scss"
import {useHistory} from "react-router-dom";
import Pagination from "react-js-pagination";

export const Home = () => {
   const [valueFilter, setValueFilter] = useState('')
   const productItem = fireDB.database().ref("product")
   const history = useHistory();
   const [currentPage, setCurrentPage] = useState(1)
   const [perProduct, setPerProduct] = useState([])
   const perPage = 9
   const [productList, setProductList] = useState([]);

   const test = []
   useEffect(() => {
      productItem.on('value', (snapshot) => {

         const productList = Object.keys(snapshot.val()).map(key => {
            const data = snapshot.val()[key];
            data.id = key
            return data;
         }).reverse();

         setProductList(productList)
         setPerProduct(productList.slice(
            (currentPage - 1) * perPage,
            (currentPage - 1) * perPage + perPage
         ))
      })

   }, [])


   function ascending(value) {
      setValueFilter(value)
      perProduct.sort((a, b) => {
         if (value === 'az') {
            return (a.name).localeCompare(b.name)
         } else if (value === "za") {
            return (b.name).localeCompare(a.name)
         } else if (value === "09") {
            return a.price - b.price
         } else if (value === "90") {
            return b.price - a.price
         }
      })

   }

   function onPageChange(pageNumber) {
      setCurrentPage(pageNumber)
      setPerProduct(productList.slice(
         (pageNumber - 1) * perPage,
         (pageNumber - 1) * perPage + perPage
      ))
      setValueFilter('')
   }

   return (
      <div className="container">
         <div className="row">
            <div className="col-lg-3">
               <div className="shadow p-3 mt-5 bg-white">
                  <div className="alert alert-primary fs-6 fw-bold" role="alert">
                     Filter Product
                  </div>
                  <div className="filter-box">
                     <div>
                        <input
                           type="radio"
                           checked={valueFilter === 'az'}
                           value="az"
                           onChange={event => ascending(event.target.value)}
                        /> By Name A - Z
                     </div>
                     <div>
                        <input
                           type="radio"
                           checked={valueFilter === 'za'}
                           value="za"
                           onChange={event => ascending(event.target.value)}
                        /> By Name Z - A
                     </div>
                     <div>
                        <input
                           type="radio"
                           checked={valueFilter === '09'}
                           value="09"
                           onChange={event => ascending(event.target.value)}
                        /> By Price 0 - 9
                     </div>
                     <div>
                        <input
                           type="radio"
                           checked={valueFilter === '90'}
                           value="90"
                           onChange={event => ascending(event.target.value)}
                        /> By Price 9 - 0
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-9">
               <div className="shadow p-3 mt-5 bg-white">
                  <div className="row">
                     {
                        perProduct.map((value, index) => {
                           return <div className="col-lg-4 mb-4" key={index}>
                              <div className="product-item card">
                                 <img src={value.image} className="card-img-top" alt=""/>
                                 <div className="card-body">
                                    <h5 className="card-title">{value.name}</h5>
                                    <h6
                                       className="my-3">{value.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h6>
                                    <p className="card-text">{value.description}</p>
                                    <div className="button-action mt-3">
                                       <button onClick={() => {
                                          history.push({
                                             pathname: `product-detail/${value.name}`,
                                             state: value
                                          })
                                       }}>Detail
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        })
                     }
                     <div className="col-lg-12">
                        <div className="pagination-product mt-4">
                           <Pagination
                              activePage={currentPage}
                              itemsCountPerPage={perPage}
                              totalItemsCount={productList.length}
                              pageRangeDisplayed={5}
                              onChange={onPageChange}
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}