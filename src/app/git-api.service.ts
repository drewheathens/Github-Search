import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class gitapiService {

  private userName: string;
  private apiKey = '7ee513f16f753f3726655133c2e4164ff84d4ee0';
  constructor(public http: HttpClient) {
    console.log('service is now ready');
    this.userName = 'drewheathens'
  }

  getUserInfo() {
    return this.http.get("https://api.github.com/users/" + this.userName + "?access_token=" + this.apiKey)
  }
  getUserRepos() {
    return this.http.get("https://api.github.com/users/" + this.userName + "/repos?access_token=" + this.apiKey)

  }
  updateProfile(userName: string) {
    this.userName = userName;
    console.log(this.userName)
  }

}
