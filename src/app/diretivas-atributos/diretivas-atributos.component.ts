import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit{

  public valor:boolean = true;
  public alturaPX: string = "20px";
  public planoFundo: string = "red";

  public nome: string ="";
  public list: Array<{nome:string}> = [];

  constructor(){}

  ngOnInit(): void {
    setInterval(()=>{
      if (this.valor){
        this.valor = false;
      }
      else{
        this.valor = true;
      }
      if(this.alturaPX == '20px'){
      this.alturaPX = '50px';
      this.planoFundo = 'blue'
      }
      else{
      this.alturaPX = '20px';
      this.planoFundo = 'red';
      }
    }, 2000)
  }

  public salvar(){
    this.list.push({nome: this.nome});
    this.nome = "";
    }
}
