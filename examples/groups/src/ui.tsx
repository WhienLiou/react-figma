import * as yoga from 'yoga-layout-prebuilt';
import { uiWorker } from '../../../src';

const handler = uiWorker({ yoga, fetch });

onmessage = event => {
    handler(event);
};
