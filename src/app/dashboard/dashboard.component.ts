import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroFbService } from '../hero-fb.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroFbService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
