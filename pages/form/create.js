import CreateEvents from "../account/events/create";
import Header from "../../components/Header/Header";

export default function CreateEventsAll(){
	return (
		<div>
			<div style={{position:"fixed",width:"100%",zIndex:"50"}}>
				<Header />
			</div>
			<div style={{width:"100%", display:"flex", position:"relative", justifyContent:"center",padding:"80px"}}>
				<div style={{margin:"0 auto"}}>
					{CreateEvents({
						createdBy:"visitor"
					})}
				</div>
			</div>
		</div>
	)
}

CreateEventsAll.prototype.type="form"