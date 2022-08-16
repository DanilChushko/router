import axios from 'axios';

export default class ModulesService {
	async remoteImport(url) {
		return (await window.System.import(url)).default;
	}

	async getApplicationModule(fileRoute) {
		const data = await axios.get(`${fileRoute}config.json?${new Date().getTime()}`);
		return this.remoteImport(`${fileRoute}${data.data.src}`);
	}
}
