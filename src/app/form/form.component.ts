import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository'
import { User } from '../user'
import 'rxjs/add/operator/map';
import { FormsService } from './form/Forms.service';
// import {FormsModuleService} from '../forms.service'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  profile: any[];
  repository: any[];
  username: string;

  constructor(private FormsService: FormsService) {
    console.log(user);
    this.user = user;
  }
this.FormsService.getRepository().subscribe(repository => {

  this.repository = repository;
})
}

ngOnInit() {
}
User(){
  this.FormsService.updateUser(this.username);
  this.FormsService.getUser().subscribe(user => {
    this.user = user;
  })

  this.FormsService.getRepository().subscribe(repository => {

    this.repository = repository;
  })

}
}
