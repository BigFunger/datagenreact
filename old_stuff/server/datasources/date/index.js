import { DateSource } from './date_source';

export function registerDate (server) {
  const datagenreact = server.plugins.datagenreact;

  datagenreact.datasources.register({
    date: {
      class: DateSource
    }
  });
}
