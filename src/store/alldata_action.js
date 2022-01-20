import axios from "axios"


export const getMovieData = () => (dispatch) => {

	return  axios.get("https://api.themoviedb.org/3/movie/popular?api_key=2e5d307a9142003b321ca6029b44fe63")
	.then((res)=> dispatch({
		type: "GET_DATA",
		payload: res.data.results
	})
	)

	.catch((err) => console.log(err))
}