import dCargo from './../../public/D_Cargo';
import dNet from './../../public/D_Net';

export default {
	getCargo() {
		return Promise.resolve(dCargo);
	},
	getDNet() {
		return Promise.resolve(dNet);
	}
}