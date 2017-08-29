import { management } from 'ui/management';

management.getSection('elasticsearch').register('datagenreact', {
  display: 'Data Generation (React)',
  order: 3,
  url: '#/management/elasticsearch/datagenreact/'
});
