import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../reducers/login";

export const Nav = () => {

    const isLogin = useSelector(state => state.loginReducer.isLogin)
    const dispatch = useDispatch()

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/product-manager">Product Manager</Link>
                </li>
                {
                    isLogin ? <li className="dropdown">
                        <button id="infoUser" className="dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">Hello, Admin
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="infoUser">
                            <li><i className="fas fa-user"></i> Info User</li>
                            <li onClick={() => dispatch(logout())}><i className="fas fa-sign-in-alt"></i> Log
                                out
                            </li>
                        </ul>
                    </li> : null
                }
            </ul>
        </nav>
    )
}