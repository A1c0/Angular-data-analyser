import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dogs-cats',
  templateUrl: './dogs-cats.component.html',
  styleUrls: ['./dogs-cats.component.css']
})
export class DogsCatsComponent implements OnInit {

  pet = "Quel est donc cet animal ?";
  dog = 0;
  cat = 0;
  randomImageNumber = "../../assets/cats&dogs/test_img_10.jpg";

  constructor() { }

  ngOnInit() {
  }

  predictPet() {
    const predict = Math.floor(Math.random() * 100);
    if (predict > 50) {
      this.dog = predict;
      this.cat = 100 - predict;
      this.pet = "Cet animal semble être un chien";
    }
    else {
      this.dog = predict;
      this.cat = 100 - predict;
      this.pet = "Cet animal serait un chat";
    }
  }

  randomPic() {
    const imageNB = Math.floor(Math.random() * 411);
    const str1 = "../../assets/cats&dogs/test_img_";
    const str2 = ".jpg";
    this.randomImageNumber = str1.concat( imageNB.toString() ).concat(str2);
  }
}
