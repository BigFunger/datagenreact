import { registerDate } from './date';
import { registerNumber } from './number';
import { registerKeyword } from './keyword';
import { registerScript } from './script';
import { registerText } from './text';

export function registerDatasources(server) {
  registerDate(server);
  registerNumber(server);
  registerKeyword(server);
  registerScript(server);
  registerText(server);
}