import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit{

  hero$!: Observable<Hero> 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService
  ){}

  ngOnInit(): void {
   
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.heroService.getHero(params.get('id')!))
    ) 
  }

  gotoHeroes(hero: Hero){
    const heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
    this.router.navigate(['/heroes'])
  }
  

}
