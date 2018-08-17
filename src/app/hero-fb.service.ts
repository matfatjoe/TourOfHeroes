import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HeroFbService {
  private heroes: Observable<Hero[]>;
  private heroesFireList: AngularFireList<Hero>;
  private hero: Observable<Hero>;

  constructor(private db: AngularFireDatabase, private messageService: MessageService) {
    this.heroesFireList = db.list<Hero>(`heroes`);

    this.heroes = db.list<Hero>('heroes').valueChanges();

    this.heroes = this.heroesFireList.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  addHero(newHero: Hero) : void {
    this.heroesFireList.push(newHero);
    this.messageService.add(`HeroFbService: new hero added id=${newHero.id} - name=${newHero.name}`);
  }

  updateHero(key: string, updatedHero: Hero): void {
    const heroRef = this.db.object(`heroes/${key}`);
    heroRef.update({name: updatedHero.name});
    this.messageService.add(`HeroFbService: hero updated id=${updatedHero.id} - new name=${updatedHero.name}`);
 }

  deleteHero(key: string) {
    const heroRef = this.db.object(`heroes/${key}`);
    heroRef.remove();
  }

  getHeroes(): Observable<Hero[]> {
   this.messageService.add('HeroFbService: fetched heroes');
   return this.heroes;
   }

  getHero(key: string): Observable<Hero> {
   this.messageService.add(`HeroFbService: fetched hero key=${key}`);
   this.hero = <Observable<Hero>>this.db.object(`heroes/${key}`).valueChanges();
   return this.hero;
 }

}
