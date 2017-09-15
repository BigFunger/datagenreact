import { generator, mapper } from './text_source';

export function registerText (server) {
  server.plugins.datagenreact.generators.register('text', generator);
  server.plugins.datagenreact.mappers.register('text', mapper);
}

