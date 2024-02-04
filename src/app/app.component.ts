import { Component } from '@angular/core';
import { ServiesService } from './servies.service'; // import to servise כדי שיזהה אותו ונוכל להשתמש בפעולות שלו

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServiesService]
})
export class AppComponent {
  title = 'project_year2_semester1';
  serviesService: ServiesService;

  constructor(serviesService: ServiesService) {
    this.serviesService = serviesService;
  }
}