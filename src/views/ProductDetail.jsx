import {useLocation} from "react-router-dom";

export const ProductDetail = () => {
    const location = useLocation();
    const state = location.state;
    console.log(state)

    return (
        <div className="container">
            <div className="row">

            </div>
        </div>
    )
}