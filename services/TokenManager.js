class TokenManager{
	constructor() {

	}

	login(login, password){
		return new Promise((resolve, reject)=>{
			fetch(NEXT_PUBLIC_API_HOST+`/login/password`)
				.then((e)=>{

				})
		})
	}

	getToken(login, password){
		const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN")
		if(ACCESS_TOKEN){
			return ACCESS_TOKEN;
		}else if(login && password){

		}else{
			return undefined
		}
	}
}