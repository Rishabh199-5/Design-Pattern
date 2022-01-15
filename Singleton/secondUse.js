import logger from "./SingletonPattern";

export default function logSecondImplementation(){
    logger.printLogCount();
    logger.log('Second File');
    logger.printLogCount();
}