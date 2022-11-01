import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { DynamicFormModel, DynamicFormService } from '@ng-dynamic-forms/core';
import { switchMap } from 'rxjs';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MY_FORM_MODEL } from './agregar.constans';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  formModel: DynamicFormModel = MY_FORM_MODEL;
  formGroup = this.formService.createFormGroup(this.formModel);
  id!: string;
  heroe:Heroe={
    alter_ego:'',
    superhero:'',
    characters:'',
    first_appearance:'',
    publisher:Publisher.MarvelComics,
    alt_img:''
  };

  publishers=[
    {
      id:'Marvel Comics',
      descripcion:'Marvel Comics'

    },
    {
      id:'DC Comics',
      descripcion:'DC Comics'

    },

  ]

  constructor(
    private formService: DynamicFormService,
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router


  ) { }

  ngOnInit(): void {
    if (this.router.url.includes('editar')) {
      this.activatedRoute.params
        .pipe(
          switchMap(({ id }) => {
            console.log(id);
            return this.heroesService.getHeroeByid(id)
          })
        )
        .subscribe(heroe => {
          const { id, ...otro } = heroe;
          this.id = id || '';
          this.formGroup.setValue(otro)
          this.heroe = heroe
                  
        });

    }
  }

  guardar() {
    console.log(this.formGroup.value)
  }
}
