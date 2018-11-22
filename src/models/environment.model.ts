import * as data from '../env';

export class Environment {
    
    private apiKey: string;
    private authDomain: string;
    private databaseURL: string;
    private projectId: string;
    private storageBucket: string;
    private messagingSenderId: string;
    private webServiceURL: string;
    
    constructor(){
        this.apiKey = data.process.env.apiKey;
        this.authDomain = data.process.env.authDomain;
        this.databaseURL = data.process.env.databaseURL;
        this.projectId = data.process.env.projectId;
        this.storageBucket = data.process.env.storageBucket;
        this.messagingSenderId = data.process.env.messagingSenderId;
        this.webServiceURL = data.process.env.webServiceURL;
    }

    getApiKey():string {
        return this.apiKey;
    }

    getAuthDomain():string {
        return this.authDomain;
    }
    
    getDatabaseUrl():string {
        return this.databaseURL;
    }

    getProjectid():string {
        return this.projectId;
    }

    getStorageBucket():string {
        return this.storageBucket;
    }

    getMessagingSenderId():string {
        return this.messagingSenderId;
    }

    getWebServiceURL():string {
        return this.webServiceURL;
    }

}