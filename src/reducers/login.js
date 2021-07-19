const {createSlice} = require("@reduxjs/toolkit");

const loginSlice = createSlice({
    name: "loginReducer",
    initialState: {
        isLogin: localStorage.getItem('tokenLogin') ? true : false,
    },
    reducers: {
        login: (state, action) => {
            const {username, password} = action.payload
            if (username === 'admin' && password === 'admin') {
                localStorage.setItem('tokenLogin', 'true')
                state.isLogin = true
            } else {
                alert('Your username or password is incorrect.')
            }
        },
        logout: (state) => {
            // eslint-disable-next-line no-restricted-globals
            if (confirm('Are you sure you want to sign out?')) {
                state.isLogin = false
                localStorage.removeItem('tokenLogin')
            }
        }
    }
})

export const {login, logout} = loginSlice.actions
export default loginSlice.reducer