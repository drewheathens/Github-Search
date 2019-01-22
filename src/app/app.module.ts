import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { GitUsersComponent } from './git-users/git-users.component';
import { gitapiService } from './git-api.service';
import { RepositoryComponent } from './repository/repository.component';

import { StrikethroughDirective } from './strikethrough.directive';
import { timeellapsedPipe } from './time-ellapsed-pipe.pipe';






@NgModule({
  declarations: [
    AppComponent,
    
    RepositoryComponent,
    timeellapsedPipe,
    StrikethroughDirective,
    GitUsersComponent,


  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule

  ],
  providers: [gitapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
