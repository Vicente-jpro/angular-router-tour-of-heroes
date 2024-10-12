import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent implements OnInit{

  hero$: Observable<Hero> = new Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!; 
    const idHero = Number.parseInt(id)
    this.hero$ = this.heroService.getHero(idHero); 
  }

  gotoHero(hero: Hero){
    const heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
    this.router.navigate(['/heroes'])
  }

}
