import { registerManager } from './server/manager';
import { registerDatasources } from './server/datasources';
import { registerRoutes } from './server/routes';

module.exports = function (kibana) {
  return new kibana.Plugin({
    require: ['kibana', 'elasticsearch'],
    uiExports: {
      managementSections: [
        'plugins/datagenreact',
      ]
    },
    init: (server) => {
      registerManager(server);
      registerDatasources(server);
      registerRoutes(server);
    }
  });
};
