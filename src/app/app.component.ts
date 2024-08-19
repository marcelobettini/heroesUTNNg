import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiHeroService } from './services/api-hero.service';
import { Observable } from 'rxjs';
import { hero } from './types/types';
import { HeroesComponent } from './heroes/heroes.component';
import { AddHeroComponent } from './add-hero/add-hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, HeroesComponent, AddHeroComponent],
  template: `
    <div class="container">
      <h1>Heroes</h1>
      @if(heroesResult$ | async; as heroesList){
      <app-heroes [heroes]="heroesList" />
      <app-add-hero />
      }@else {
      <p>Loading...</p>
      }
    </div>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  //guardamos el resultado de la peticion http en una variable del tipo observable
  public heroesResult$!: Observable<hero[]>;

  //inyectamos el servicio en el componente
  constructor(private apiHero: ApiHeroService) {}
  //Al montar el componente App se llama al servicio y se almacenan los recursos que devuelve en la variable observable heroesResult$
  ngOnInit(): void {
    this.heroesResult$ = this.apiHero.getAll();
  }
}
