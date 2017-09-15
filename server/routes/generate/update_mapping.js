import { loadMapping } from './load_mapping';
import { createMapping } from './create_mapping';
import { editMapping } from './edit_mapping';
import { buildMapping } from './build_mapping';

export function updateMapping(callWithRequest, mappers, dataplan, datasources) {
  return loadMapping(callWithRequest, dataplan)
  .then((mapping) => {
    if (!mapping) {
      return createMapping(callWithRequest, mappers, dataplan, datasources);
    } else {
      return editMapping(callWithRequest, dataplan, mapping);
    }
  });
}
