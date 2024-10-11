import { Injectable } from '@angular/core';
import { Hero } from '../hero-list/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[]{
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
    let heroes: Hero[] = []

    heroes = [hero1, hero2, hero3, hero4]
    
    return heroes  
  }
}
