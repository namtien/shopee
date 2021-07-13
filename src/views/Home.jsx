import {useEffect, useState} from "react";
import fireDB from "../assets/js/firebase";

export const Home = () => {
    const [productList, setProductList] = useState([]);
    const [gender, setGender] = useState('')
    const productItem = fireDB.database().ref("product")
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
            }
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    {gender}
                    <input
                        type="radio"
                        checked={gender === 'az'}
                        value="az"
                        onChange={event => ascending(event.target.value)}
                    />
                    <input
                        type="radio"
                        checked={gender === 'za'}
                        value="za"
                        onChange={event => ascending(event.target.value)}
                    />
                </div>
                <div className="col-lg-9">
                    {
                        productList.map((value, index) => {
                            return <div key={index}>
                                {value.name}
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}