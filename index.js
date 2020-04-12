import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import App from './App'
import './index.css'
import Login from './login'

const FrontPage = () => {
	const [userData, setUserData ] = useState(null)
	const [needsLogin, setNeedsLogin ] = useState(false)

	useEffect(() => {
		fetch('/user/data')
		.then(res => {
			if (res.status === 401){
				setNeedsLogin(true)
			}
			else {
				res.json().then(setUserData)
			}
		})
	}, [])
	if (needsLogin) return <Login />
	if (!userData) return null

	return <App data={userData} />
}


render(<FrontPage />, document.getElementById("root"));