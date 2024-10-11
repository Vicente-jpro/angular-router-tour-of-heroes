import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent implements OnInit{

  hero: Hero = new Hero();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService
  ){}

  ngOnInit(): void {
      //this.route.
  }
}
