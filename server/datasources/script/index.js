import { generator, mapper } from './script_source';

export function registerScript (server) {
  server.plugins.datagenreact.generators.register('script', generator);
  server.plugins.datagenreact.mappers.register('script', mapper);
}
