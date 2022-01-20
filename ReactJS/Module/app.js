import logger, { TYPE_ERROR, TYPE_WARN, TYPE_LOG } from './log.js'

let type = [TYPE_ERROR, TYPE_WARN, TYPE_LOG];

type.forEach(i => console.log(logger("Test messages ...", i)))

