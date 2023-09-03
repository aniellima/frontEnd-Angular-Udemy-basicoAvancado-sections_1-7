import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--<app-data-binding>
      <h1>Aulas de Data Binding</h1>
      <h3>Final da Aula</h3>
    </app-data-binding>
    -->
    <!--
    <app-diretivas-estruturais>
      <h1>Aulas de Diretivas Estruturais</h1>
      <h3>Final da Aula</h3>
    </app-diretivas-estruturais>
    -->
    <!--
    <app-diretivas-atributos>
      <h1>Aulas de Diretivas Atributos</h1>
      <h3>Final da Aula</h3>
    </app-diretivas-atributos>
    -->
    <!--
    <app-diretivas-atributos>
      <h1>Aulas de Diretivas Atributos 2</h1>
      <h3>Final da Aula 2</h3>
    </app-diretivas-atributos>
    -->
    <!--
    <app-new-component>
      <header>
        <h1>Header do App</h1>
      </header>
    </app-new-component>
    -->
    <app-input [contador]="addValue"></app-input>
    <br>
    <button (click)="add()">INCREMENTA</button>

    <ng-template [ngIf]="getDados">
      <h1>{{getDados.nome}}</h1>
      <h2>{{getDados.idade}}</h2>
    </ng-template>

    <app-output (enviarDados)="setDados($event)"></app-output>
    <router-outlet></router-outlet>`
})

// OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked
export class AppComponent implements OnInit{

  public addValue:number = 0;
  public destruir:boolean = true;

  public getDados: {nome: string, idade: number} | undefined;

  constructor() {}

  ngOnInit():void
  {}

  public add(){
    this.addValue += 1;
  }

  public setDados(event: any){
    this.getDados = event;
  }


}
