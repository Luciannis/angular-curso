import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent {

  private _nuevo:Personaje[] = [
 {   nombre:"Master rochi"
    ,poder: 10000}
  ]
  get personajes(): Personaje[]{
    return [...this._nuevo];
  }

  constructor(){

  }
}
