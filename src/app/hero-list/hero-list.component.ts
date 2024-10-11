import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit{

  heroes: Hero[] = []
  
  constructor(private heroService: HeroService){

  }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes()
  }
  


}
