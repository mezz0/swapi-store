import { action, thunk } from 'easy-peasy'

const fetchData = {
	data: null,
	isFetching: null,
	setFetching: action((state, payload) => {
		state.isFetching = true
	}),
	setData: action((state, payload) => {
		state.data = payload
		state.isFetching = false
	}),
	fetchData: thunk(async(actions, url) => {
		actions.setFetching()
		const res = await fetch(url).then(json => json.json())
		actions.setData(res.results)
	})
}

const storeModel = { fetchData }

export default storeModel