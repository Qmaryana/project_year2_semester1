import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';

const appRouting: Routes = [ // מערך של הדפים שלנו
  { path: '', component: HomeComponent },
  { path: 'women', component: WomenComponent },
  { path: 'men', component: MenComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WomenComponent,
    MenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouting), // Provide routes to RouterModule here העתקנו מהמצגת את זה
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }