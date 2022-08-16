export default class SessionService {
	constructor() {
		this.authState = false;
	}

	get isAuthenticated() {
		return this.authState;
	}

	setAuthState(value) {
		this.authState = value;
	}
}