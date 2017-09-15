import { callWithRequestFactory } from '../../lib/call_with_request_factory';
import { updateMapping } from './update_mapping';
import { generateData } from './generate_data';

export default (server) => {
  server.route({
    path: '/api/kibana/datagenreact/generate',
    method: 'POST',
    handler: function (request, reply) {
      const callWithRequest = callWithRequestFactory(server, request);
      const {
        dataplan,
        datasources
      } = request.payload;

      return updateMapping(callWithRequest, dataplan, datasources)
        .then((mapping) => {
          return generateData(callWithRequest, dataplan, server);
        })
        .then(reply)
        .catch((er) => {
          console.log(er);
          reply(er);
        })
    }
  });
};
