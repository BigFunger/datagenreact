import { generator, mapper } from './keyword_source';

export function registerKeyword (server) {
  server.plugins.datagenreact.generators.register('keyword', generator);
  server.plugins.datagenreact.mappers.register('keyword', mapper);
}
