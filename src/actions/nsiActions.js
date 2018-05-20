export const nsiActions = {
	dnetLoaded: (payload) => ({
		type: nsiActionTypes.DNET_LOADED,
		payload
	}),
	dcargoLoaded: (payload) => ({
		type: nsiActionTypes.DCARGO_LOADED,
		payload
	})
}

export const nsiActionTypes = {
	DNET_LOADED: 'DNET_LOADED',
	DCARGO_LOADED: 'DCARGO_LOADED'
}