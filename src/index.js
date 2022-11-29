import { registerApplication, start } from 'single-spa';
import SessionService from './services/session-service'
import ModulesService from './services/modules-service'

const modulesService = new ModulesService();
const sessionService = new SessionService();

const apps = [{
	id: 'home',
	path: 'http://localhost:4401/'
}, {
	id: 'orders',
	path: 'http://localhost:4402/'
}];

apps.forEach((app) => registerApplication({
	name: app.id,
	app: () => modulesService.getApplicationModule(app.path),
	activeWhen: (location) => location.pathname.startsWith(`/${app.id}`),
	customProps: () => ({
		data: {
			sessionService
		}
	})
}));

start();

