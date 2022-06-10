import CreateEvents from "../account/events/create";

export default function CreateEventsAll(){
	return (
		<div style={{width:"100%", display:"flex", position:"relative", justifyContent:"center"}}>
			<div style={{margin:"0 auto"}}>
				{CreateEvents()}
			</div>
		</div>
	)
}

CreateEventsAll.prototype.type="form"