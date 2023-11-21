import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
 

})
export class IntroComponent {
  images: string[] = [
    
   'https://wallpaperset.com/w/full/a/3/6/263738.jpg',
   'https://wallpaperaccess.com/full/124036.jpg',
   'https://wallpaperset.com/w/full/c/a/0/263730.jpg',
   'https://wallpaperset.com/w/full/9/3/f/263734.jpg',
   'https://wallpaperset.com/w/full/1/9/5/263739.jpg',
   'https://wallpaperset.com/w/full/c/2/5/263750.jpg',
  ];
  currentImageIndex = 0;
  currentImageUrl = this.images[this.currentImageIndex];

  ngOnInit() {
    setInterval(() => this.changeImage(), 2100); 
  }

  changeImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.currentImageUrl = this.images[this.currentImageIndex];
  }
}
