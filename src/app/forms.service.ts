import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { FormsModuleService } from './form/Forms.service';
import {User} from './user'
import 'rxjs/add/operator/map';
import {Environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  private userName: string;
  private clientid: '325f56f449d118e16edb';
  private clientsecret: 'bc68155c765a5d1e7c4e6e076113a9e887e36a37';

  constructor(private http: HttpClient) {
    console.log('service ready');
    this.userName = "drewheathens";

      }

    getUser(){
         return this.http.get("https://api.github.com/users/"+this.userName)
         .pipe(map(result=>result))

       }
       getRepository(){
         return this.http.get("https://api.github.com/users/"+this.userName)
         .pipe(Map(result=>result))
     }
     updateUser(username:string){
       this.username = userName;

      }
}
