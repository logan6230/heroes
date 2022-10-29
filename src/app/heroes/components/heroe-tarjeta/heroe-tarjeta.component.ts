import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

interface Ficticia {
  valor1: string;
  valor2: number;
}

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.scss']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe!: Heroe;
  // @Output () evento27: EventEmitter<Ficticia> = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
    // if(this.heroe.first_appearance.includes('#27')) {


    //   console.log(this.heroe);
    //   // simular espera 
    //   setTimeout(() => {
    //     // comunicar al padre la infomacion que yo quiero. 
    //     this.evento27.emit(
    //       {
    //         valor1: 'Tengo problemas aqui con este heroe' + this.heroe.characters,
    //         valor2: 27
    //       }
    //     );
    //   }, 5000);

    // }

  }

  // informeAlPadre() {
  //   this.evento27.emit(
  //     {
  //       valor1:  this.heroe.characters,
  //       valor2: 0
  //     }
  //   );
  // }

}
