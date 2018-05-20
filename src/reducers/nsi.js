import { nsiActionTypes } from './../actions/nsiActions';

export default function nsi(state = {dnet: {}, cargo: {}}, action) {
	switch (action.type) {
	  case nsiActionTypes.DNET_LOADED: {
			return {
				...state,
				dnet: action.payload
			}
	  }
	  case nsiActionTypes.DCARGO_LOADED: {
			return {
				...state,
				cargo: action.payload
			}
	  }
	  default:
		return state;
	}
}
  