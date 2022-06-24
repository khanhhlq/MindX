import { log2 } from './log/index.js'
import * as constants from './constants.js' // Lấy all data trong constants.js và đưa ra ở dạng object

console.log(constants);

log2('Test message ...', constants.TYPE_LOG);
log2('Test message ...', constants.TYPE_ERROR);
log2('Test message ...', constants.TYPE_WARN);
