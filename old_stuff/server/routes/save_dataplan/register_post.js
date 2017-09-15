import { random, reduce } from 'lodash';
import { callWithRequestFactory } from '../../lib/call_with_request_factory';

function saveDataplan(callWithRequest, id, dataplan, datasources) {
  const body = {
    dataplan,
    datasources
  };

  return callWithRequest('index', {
    index: 'datagen',
    type: 'dataplan',
    id,
    body
  });
}

export default (server) => {
  server.route({
    path: '/api/kibana/datagenreact/save/{id}',
    method: 'POST',
    handler: function (request, reply) {
      const callWithRequest = callWithRequestFactory(server, request);
      const { id } = request.params;
      const {
        dataplan,
        datasources
      } = request.payload;

      return saveDataplan(callWithRequest, id, dataplan, datasources)
      .then(reply)
      .catch((er) => {
        console.log(er);
        reply(er);
      })
    }
  });
};
