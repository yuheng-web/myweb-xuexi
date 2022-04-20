export default class Singleton {

    static _instance = new Singleton();

    static getInstance() {
        return Singleton._instance;
    }

    appName = "/xuexi"

}
