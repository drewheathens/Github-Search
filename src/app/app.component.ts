import { Component } from '@angular/core';
import {Repository} from './repository';
import {User} from './user'
import {FormsService} from './form/Forms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Github-Search';
}
