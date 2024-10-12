import { Injectable } from '@angular/core';
import { Hero } from '../hero-list/hero';
import { map, Observable, of } from 'rxjs';
import { HEROES } from '../hero-list/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes: Hero[] = []
  heroes$: Observable<Hero[]> = new Observable<Hero[]>

  constructor() {
   }

 

  getHeroes(): Observable<Hero[]>{
    return of(HEROES) 
  }
  getHero(idHero: number | string): Observable<Hero>{
    
    return this.getHeroes().pipe(
      map( (heroes: Hero[]) => heroes.find(hero => hero.id == +idHero)!)
    )
    
  }


}
