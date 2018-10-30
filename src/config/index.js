import rnconfig from 'react-native-config';
import merge from 'lodash/merge';
import get from 'lodash/get';
import base from './environments/base';

const _RN_ENV = rnconfig._RN_ENV || 'dev';

let config = null;

function getConfig() {
	if (config === null) {
		const files = {
			dev: require('./environments/development').default,
			prod: require('./environments/production').default
		};

		const local = get(files, _RN_ENV, files.dev);

		config = merge({}, base, local);
	}

	return config;
}


export default getConfig();
