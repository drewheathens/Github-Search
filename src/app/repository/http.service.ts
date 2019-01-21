import { Injectable } from '@angular/core';
import { FormsModule} from '@angular/forms'
// import { Http, Hearders} from '@anglar/http';

import { HttpService } from '../http.service';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private userName: string;
  private clientid: '325f56f449d118e16edb';
  private clientsecret: 'bc68155c765a5d1e7c4e6e076113a9e887e36a37';


  constructor( private http:Http) {
  console.log('service ready');
  this.userName = "drewheathens";
}
ProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.userName + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .map(res => res.json());
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.userName + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .map(res => res.json());
  }
updateProfile(userName:string){
  this.userName = userName;

}
}
