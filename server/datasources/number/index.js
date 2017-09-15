import { generator, mapper } from './number_source';

export function registerNumber (server) {
  server.plugins.datagenreact.generators.register('number', generator);
  server.plugins.datagenreact.mappers.register('number', mapper);
}
