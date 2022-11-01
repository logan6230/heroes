import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {
heroes:Heroe[]=[];
termino:string='';
heroeSeleccionado : Heroe|undefined;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }
buscar(){
this.heroesService.getSearchHero(this.termino.trim())
.subscribe(heroes=>this.heroes = heroes);
}
elementoSeleccionado(evento:MatAutocompleteSelectedEvent){
  if(!evento.option.value){
    this.heroeSeleccionado = undefined;
    return
  }
  const heroe:Heroe = evento.option.value;
  this.termino = heroe.superhero;
  this.heroesService.getHeroeByid(heroe.id!)
  .subscribe(heroe=>this.heroeSeleccionado=heroe);
}
}
