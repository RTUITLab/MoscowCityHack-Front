import '../styles/globals.css';
import 'antd/dist/antd.css';
import Layout from "../components/Layout/Layout";
import MainContext from "../contexts/MainContext";
import {useState} from "react";

function MyApp({Component, pageProps}) {

	const [state, editState] = useState({
		title: "ff"
	})

	const setState = (e) => {
		editState((prevState) => ({...prevState, ...e}))
	}

	if (Component.prototype) {
		const prototype = Object.keys(Component.prototype)
		if (prototype.indexOf("type") !== -1)
			return <MainContext.Provider value={[state, setState]}><Component {...pageProps} /></MainContext.Provider>;
		else
			return <MainContext.Provider
				value={[state, setState]}><Layout><Component {...pageProps}/></Layout></MainContext.Provider>
	}
	return <MainContext.Provider
		value={[state, setState]}><Layout><Component {...pageProps}/></Layout></MainContext.Provider>

}

export default MyApp;
