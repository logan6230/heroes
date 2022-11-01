import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormsMaterialUIModule } from "@ng-dynamic-forms/ui-material";
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { MaterialModule } from '../material/material.module';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    ListadoComponent,
    HeroeComponent,
    AgregarComponent,
    BuscarComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    CommonModule,
    DynamicFormsMaterialUIModule,
    FlexLayoutModule,
    FormsModule,
    HeroesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
