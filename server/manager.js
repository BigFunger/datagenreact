export function registerManager(server) {
  function getRegister(collection) {
    return (key, item) => {
      collection[key] = item;
    }
  };

  const generators = {};
  generators.register = getRegister(generators);

  const mappers = {};
  mappers.register = getRegister(mappers);

  server.expose('generators', generators);
  server.expose('mappers', mappers);
};
