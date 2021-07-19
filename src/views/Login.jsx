import "../assets/css/login.scss"
import {useDispatch, useSelector} from "react-redux";
import {login} from "../reducers/login";
import {useState} from "react";


export const Login = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="login">
            <div className="table-cart shadow p-3 mt-5 bg-white">
                <div className="alert alert-primary fs-6 fw-bold" role="alert">
                    Login
                </div>
                <div className="form-input mb-4 mt-4">
                    <input
                        className="text-input"
                        type="text"
                        placeholder=" "
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                    />
                    <label htmlFor="">User Name: admin</label>
                </div>
                <div className="form-input mb-4 mt-4">
                    <input
                        className="text-input"
                        type="password"
                        placeholder=" "
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                    <label htmlFor="">Password: admin</label>
                </div>
                <button onClick={() => dispatch(login({username, password}))}>Login</button>
            </div>
        </div>
    )
}