import { random, reduce, get } from 'lodash';
import { callWithRequestFactory } from '../../lib/call_with_request_factory';

function loadDataplan(callWithRequest, id) {
  return callWithRequest('get', {
    index: 'datagen',
    type: 'dataplan',
    id
  });
}

export default (server) => {
  server.route({
    path: '/api/kibana/datagenreact/dataplan/{id}',
    method: 'GET',
    handler: function (request, reply) {
      const { id } = request.params;
      const callWithRequest = callWithRequestFactory(server, request);

      return loadDataplan(callWithRequest, id)
      .then((response) => {
        const {
          _source: {
            dataplan,
            datasources
          }
        } = response;

        reply({ dataplan, datasources });
      })
      .catch((er) => {
        console.log(er);
        reply(er);
      })
    }
  });
};
