import { Component, OnInit } from '@angular/core';
import { HeroFbService } from '../hero-fb.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.css']
})
export class HeroAddComponent implements OnInit {
  private hero: Hero;

  constructor(private heroService: HeroFbService) {
    this.hero = new Hero();
  }

  ngOnInit() {
  }

  add(){
    if ( this.hero.id == null || this.hero.name == null ) {
      alert("Preencha os campos!");
    } else {
      this.heroService.addHero(this.hero);
      this.limparCampos();
    }
  }

  limparCampos() {
    this.hero.id = null;
    this.hero.name = null;
  }

}
