module.exports = {
  name: 'shell',
  remotes: [],
  shared: (name, config) => {
    return (name === 'socket.io-client') ? { ...config, strictVersion: false } : config;
  },
};
