import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-dogs-cats',
  templateUrl: './dogs-cats.component.html',
  styleUrls: ['./dogs-cats.component.css']
})
export class DogsCatsComponent implements OnInit {

  pet = "Suspens ...";
  dog = 50;
  cat = 50;
  randomImageNumber = "../../assets/cats&dogs/test_img_10.jpg";

  constructor() { }

  ngOnInit() {
    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light1",
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: "Chat ou chien ?"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: this.dog, name: "Chien" },
          { y: this.cat, name: "Chat" }
        ]
      }]
    });

    chart.render();
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

    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light1",
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: "Chat ou chien ?"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: this.dog, name: "Chien" },
          { y: this.cat, name: "Chat" }
        ]
      }]
    });

    chart.render();
  }

  randomPic() {
    const imageNB = Math.floor(Math.random() * 411);
    const str1 = "../../assets/cats&dogs/test_img_";
    const str2 = ".jpg";
    this.randomImageNumber = str1.concat( imageNB.toString() ).concat(str2);
  }
}
