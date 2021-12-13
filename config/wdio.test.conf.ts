import { config as baseConfig} from '../wdio.conf';
export const config = Object.assign(baseConfig, {
    //All Tests env Specific key val pairs
    environment: 'TEST', 
});