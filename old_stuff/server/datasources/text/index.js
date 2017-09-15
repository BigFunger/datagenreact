import { TextSource } from './text_source';

export function registerText (server) {
  const datagenreact = server.plugins.datagenreact;

  datagenreact.datasources.register({
    text: {
      class: TextSource
    }
  });
}
