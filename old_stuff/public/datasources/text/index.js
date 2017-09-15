import registry from 'plugins/datagenreact/datasource_registry';
import { TextSource } from './text_source';
import './text_source_ui';

registry.register(() => {
  return {
    id: 'text',
    name: 'Text',
    ViewModel: TextSource
  };
});
