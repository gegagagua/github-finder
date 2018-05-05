import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username:string;
    private client_id = 'b20aaadc5782132982d2';
    private client_secret = '1ade5fb7a0a49b1413a9255967d056b4eb04bed7';

    constructor( private _http: Http ) {
        console.log('github ready');
        this.username = 'gegagagua';
    }

    updateUser( name = '' ) {
        this.username = name;
    }

    getUser() {
        return this._http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret )
               .map( res => res.json());
    }

    getRepos() {
        return this._http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret )
               .map( res => res.json());
    }
    
}