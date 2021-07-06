import "../assets/css/product-manager.scss"

export const ProductManager = () => {
   return (
      <div className="product-manager">
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-4">
                  <div className="shadow p-3 mt-4 bg-white">
                     <div className="alert alert-primary fs-6 fw-bold" role="alert">
                        Add New
                     </div>
                     <div className="form-input mb-4 mt-4">
                        <input className="text-input" type="text" placeholder=" "/>
                        <label htmlFor="">Name</label>
                     </div>
                     <div className="form-input mb-4">
                        <input className="text-input" type="text" placeholder=" "/>
                        <label htmlFor="">Price</label>
                     </div>
                     <div className="form-input mb-2">
                        <textarea className="text-input" placeholder=" "/>
                        <label htmlFor="">Description</label>
                     </div>
                     <div className="form-input">
                        <button>Save Product</button>
                     </div>
                  </div>
               </div>
               <div className="col-lg-8">
                  <div className="shadow p-3 mt-4 bg-white">
                     <div className="alert alert-primary fs-6 fw-bold" role="alert">
                        All Product
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}