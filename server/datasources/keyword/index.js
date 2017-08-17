import { KeywordSource } from './keyword_source';

export function registerKeyword (server) {
  const datagenreact = server.plugins.datagenreact;

  datagenreact.datasources.register({
    keyword: {
      class: KeywordSource
    }
  });
}
