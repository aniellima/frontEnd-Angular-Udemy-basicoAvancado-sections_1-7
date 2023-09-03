import { Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnDestroy{
  @Input() public title:string="Bien venue";
  constructor(){}
  ngOnDestroy(): void {
    console.log('Titulo destruido');
  }


  ngOnInit(): void {

  }

}
