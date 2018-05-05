import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html',
})
export class ProfileComponent  {
    user:any[];
    repos:any[];
    username:string = 'gega';

    constructor ( private _githubService : GithubService ) {
        this.user = null;
    }

    searchUser() {
        this._githubService.updateUser( this.username );
        
        this._githubService.getUser().subscribe( user => {
            console.log( user );
            this.user = user;
        });

        this._githubService.getRepos().subscribe( repos => {
            console.log( repos );
            this.repos = repos;
        });
        console.log( this.username );
    }
}
