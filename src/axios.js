import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://fastaride.herokuapp.com/api',
	headers: {
		'content-type': 'application/json'
	}
})

export default instance
