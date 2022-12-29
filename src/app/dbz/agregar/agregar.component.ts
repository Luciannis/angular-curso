import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  @Input() nuevo: Personaje = {
    nombre:''
    ,poder:0
  }
  constructor(private dbzService: DbzService){

  }
  // @Output() nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();


  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    this.dbzService.addPersonaje(this.nuevo);
    // this.nuevoPersonaje.emit(this.nuevo);


    this.nuevo = {
      nombre: ''
      ,poder: 0
    }
  }



  ngOnInit(): void {
  }

}
