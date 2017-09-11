export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state');
		if (serializeState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	}
	catch (err) {
		return undefined;
	}
};

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setitem('state', serializedState);
	}
	catch (err) {
		// ignore write errors
	}
}
