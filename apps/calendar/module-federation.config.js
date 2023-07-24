module.exports = {
  name: 'calendar',
  exposes: {
    './Module': 'apps/calendar/src/app/remote-entry/entry.module.ts',
  },
  shared: (name, config) => {
    return (name === 'socket.io-client') ? { ...config, strictVersion: false } : config;
  },
};
