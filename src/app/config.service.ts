import { Injectable } from '@angular/core';

@Injectable()

export class ConfigService {
    constructor() { }
    
    Init() {
 
        return new Promise<void>((resolve, reject) => {
            console.log("AppInitService.init() called");
            ////do your initialisation stuff here  
            setTimeout(() => {
                console.log('AppInitService Finished');
                resolve();
            }, 500);
 
        });
    }
}