import { createAction } from 'redux-actions';

export const kibanaIntegrationUrlChange =
  createAction('KIBANA_INTEGRATION_URL_CHANGE', ({ url }) => ({ url }));