import {Button} from "antd";
import {useRouter} from "next/router";

export default function Events(){
	const router = useRouter()
	return (
		<div><Button onClick={()=>{
			router.push("/account/events/create")
		}}>Создать</Button></div>
	)
}