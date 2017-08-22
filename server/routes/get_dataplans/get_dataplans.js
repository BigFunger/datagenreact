import { callWithRequestFactory } from '../../lib/call_with_request_factory';
import { isEsErrorFactory } from '../../lib/is_es_error_factory';
import { wrapEsError, wrapUnknownError } from '../../lib/error_wrappers';
import { fetchAllFromScroll } from '../../lib/fetch_all_from_scroll';
import { INDEX_NAMES, ES_SCROLL_SETTINGS } from '../../../common/constants';

function fetchDataplans(callWithRequest) {
  const params = {
    index: 'datagen',
    scroll: ES_SCROLL_SETTINGS.KEEPALIVE,
    body: {
      size: ES_SCROLL_SETTINGS.PAGE_SIZE,
    },
    ignore: [404]
  };

  return callWithRequest('search', params)
  .then(response => fetchAllFromScroll(response, callWithRequest));
}

export const registerGet = (server) => {
  const isEsError = isEsErrorFactory(server);

  server.route({
    path: '/api/kibana/datagenreact/dataplans',
    method: 'GET',
    handler: (request, reply) => {
      const callWithRequest = callWithRequestFactory(server, request);

      return fetchDataplans(callWithRequest)
      .then(hits => {
        const response = hits.map(hit => {
          return {
            ...hit._source,
            id: hit._id
          };
        });

        reply(response);
      })
      .catch(err => {

        // Case: Error from Elasticsearch JS client
        if (isEsError(err)) {
          return reply(wrapEsError(err));
        }

        // Case: default
        reply(wrapUnknownError(err));
      });
    }
  });
};
