import { generator, mapper } from './date_source';

export function registerDate (server) {
  server.plugins.datagenreact.generators.register('date', generator);
  server.plugins.datagenreact.mappers.register('date', mapper);
}
