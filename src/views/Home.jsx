import {useEffect, useState} from "react";
import fireDB from "../assets/js/firebase";
import "../assets/css/home.scss"
import {useHistory} from "react-router-dom";

export const Home = () => {
    const [productList, setProductList] = useState([]);
    const [gender, setGender] = useState('')
    const productItem = fireDB.database().ref("product")
    const history = useHistory();
    useEffect(() => {
        productItem.on('value', (snapshot) => {
            const productList = Object.keys(snapshot.val()).map(key => snapshot.val()[key]).reverse()
            setProductList(productList)
        })
    }, [])

    function ascending(value) {
        setGender(value)
        productList.sort((a, b) => {
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
                                    checked={gender === 'az'}
                                    value="az"
                                    onChange={event => ascending(event.target.value)}
                                /> By Name A - Z
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    checked={gender === 'za'}
                                    value="za"
                                    onChange={event => ascending(event.target.value)}
                                /> By Name Z - A
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    checked={gender === '09'}
                                    value="09"
                                    onChange={event => ascending(event.target.value)}
                                /> By Price 0 - 9
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    checked={gender === '90'}
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
                                productList.map((value, index) => {
                                    return <div className="col-lg-4 mb-4" key={index}>
                                        <div className="product-item card">
                                            <img src={value.image} className="card-img-top" alt=""/>
                                            <div className="card-body">
                                                <h5 className="card-title">{value.name}</h5>
                                                <h6 className="my-3">{value.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h6>
                                                <p className="card-text">{value.description}</p>
                                                <button onClick={() => {
                                                    history.push({
                                                        pathname: `product-detail/${value.name}`,
                                                        state: value.name
                                                    })
                                                }}>Detail
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}