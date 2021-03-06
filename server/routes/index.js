import { registerGenerate } from './generate';
// import { registerInit } from './init';
import { registerLoadDataplan } from './load_dataplan';
import { registerSaveDataplan } from './save_dataplan';
import { registerGetDataplans } from './get_dataplans';

export function registerRoutes(server) {
  // registerInit(server);
  registerGenerate(server);
  registerLoadDataplan(server);
  registerSaveDataplan(server);
  registerGetDataplans(server);
}
