import logger from "./SingletonPattern";

export default function logFirstImplementation(){
    logger.printLogCount();
    logger.log('First File');
    logger.printLogCount();
}