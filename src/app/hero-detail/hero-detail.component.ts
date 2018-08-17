import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroFbService } from '../hero-fb.service'
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroFbService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void{
    const id = this.route.snapshot.paramMap.get('key');

    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  updateHero() {
    const id = this.route.snapshot.paramMap.get('key');
    this.heroService.updateHero(id, this.hero);
    this.goBack();
  }


}
