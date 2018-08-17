import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroFbService } from '../hero-fb.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroFbService: HeroFbService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroFbService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  delete(key: string): void {
    this.heroFbService.deleteHero(key);
  }

}
