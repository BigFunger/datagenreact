import { NumberSource } from './number_source';

export function registerNumber (server) {
  const datagenreact = server.plugins.datagenreact;

  datagenreact.datasources.register({
    number: {
      class: NumberSource
    }
  });
}
