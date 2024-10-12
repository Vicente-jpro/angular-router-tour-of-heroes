import { Injectable } from '@angular/core';
import { Hero } from '../hero-list/hero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes: Hero[] = []
  heroes$: Observable<Hero[]> = new Observable<Hero[]>

  constructor() {
    let hero1 = new Hero()

    hero1.id = 12;
    hero1.nome = 'Madalena'

    let hero2 = new Hero()
    hero2.id = 10;
    hero2.nome = 'Vicente'
    
    let hero3 = new Hero()
    hero3.id = 13;
    hero3.nome = 'Luisa'

    let hero4 = new Hero()
    hero4.id = 8;
    hero4.nome = 'Sebastiao'

    this.heroes = [hero1, hero2, hero3, hero4]
    this.heroes$ =[ of(hero1), of(hero1), of(hero1), of(hero1) ]
   }

  getHeroes(): Hero[]{
    return this.heroes  
  }

  getHeroesObservable(): Observable<Hero[]>{
    return this.heroes$
  }
  getHero(idHero: number): Observable<Hero>{
    let hero$ = of(this.heroes[0])
    
    return hero$
    
  }


}
