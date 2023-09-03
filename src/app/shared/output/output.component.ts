import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit{
  @Output() public enviarDados = new EventEmitter();
  public list: Array<{nome:string, idade: number}> = [
    {nome: "Aniel", idade: 38},
    {nome: "Chico", idade: 3},
    {nome: "Dax", idade: 3},
    {nome: "Kira", idade: 3},
  ]

  constructor(){}

  ngOnInit(): void {}


  public getDados(event: number){
    this.enviarDados.emit(this.list[event])
  }

}
