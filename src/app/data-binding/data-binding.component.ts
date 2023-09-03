import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit{

  public nome:string = "Aniel";
  public idade: number = 38;
  public checkedDisable: boolean = false;
  public imgSrc: string = "https://docs.angularjs.org/img/Two_Way_Data_Binding.png"
  public position: {x: number, y: number} = {x: 0, y: 0};

  constructor(){}

  ngOnInit(): void {}

  public alertaInfo(valor:MouseEvent){
    console.log(valor);
  }
  public mouseMoveTeste(valor:MouseEvent){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
