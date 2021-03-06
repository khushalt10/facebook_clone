import { Button } from '@material-ui/core'
import { auth } from './firebase'
import React from 'react'
import { provider } from './firebase'
import './Login.css'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
    const [{user}, dispatch] = useStateValue();

    const signIN = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })

            console.log(result)
        }).catch((err) => alert(err.message))
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo%282019%29.svg.png"
                    alt=""
                />

                <img 
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" 
                    alt=""
                />
            </div>

            <Button type="submit" onClick={signIN}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
