import storage from 'redux-persist/lib/storage';

export default {
	persist: {
		storage,
		key: 'application',
		version: 1,
		blacklist: ['app'],
	},
};
