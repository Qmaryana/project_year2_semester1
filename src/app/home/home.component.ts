import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  pictures: string[] = [
    "https://images.pexels.com/photos/12901715/pexels-photo-12901715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.unsplash.com/photo-1519748771451-a94c596fad67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1591892153927-33f7a2ffec89?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/12901661/pexels-photo-12901661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];

  currentPictureIndex = 0;
  // המטרה העיקרית של המתודה הזאת זה לאתחל את עצמו ולהגדיר את המצב ההתחלתי לפני שזה יופיע על המסך .
  ngOnInit() {  // מאתחל ומפעיל טיימר שיקדם אוטומטית את התמונות
    setInterval(() => {  // קורא לפונקציה כל 3 שניות
      this.nextPicture();
    }, 4000); //משנה תמונה כל 4 שניות
  }

  nextPicture = () => {
    this.currentPictureIndex = (this.currentPictureIndex + 1) % this.pictures.length; // המודלו עושה לופ
  }
}