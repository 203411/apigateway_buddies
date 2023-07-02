import path from 'path';
import gateway from 'express-gateway';
import { fileURLToPath } from 'url';
import './test.js';

const CURRENT_DIR = path.dirname(fileURLToPath(import.meta.url));
const union = path.join(CURRENT_DIR, '/config');

gateway().load(union).run();