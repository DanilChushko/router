import { registerApplication, start } from 'single-spa';
import SessionService from './services/session-service'
import ModulesService from './services/modules-service'

const modulesService = new ModulesService();
const sessionService = new SessionService();
sessionService.setAuthState(true);

const apps = [{
	id: 'home',
	path: 'http://localhost:4401/'
}];

apps.forEach((app) => registerApplication({
	name: app.id,
	app: () => modulesService.getApplicationModule(app.path),
	activeWhen: () => true,
	customProps: () => ({
		data: {
			sessionService
		}
	})
}));

start();

