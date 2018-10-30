import storage from 'redux-persist/lib/storage';

const base = {
	persist: {
		storage,
		key: 'application',
		version: 1,
		blacklist: ['app'],
	},
};

export default base;
