import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Game} from "../interfaces/game";
import {GameAdd} from "../interfaces/game-add";
import {GameDel} from "../interfaces/game-del";
import 'rxjs/add/operator/map';

@Injectable()
export class GamesService {
  games: Game[] = [];

  constructor(private http: Http) {
    this.http.get('/games/api/games/list').subscribe((value) => {
      const json = value.json();
      const games = json.games;
      Object.entries(games).forEach(([key, value]) => {
        let _value = value;
        _value['shortname'] = key;
        this.games.push(_value);
      });
      this.games.sort((a, b) => a.gamename.localeCompare(b.gamename));
    })
  }

  getGame(gameName: string): Game {
    return this.games.find((e) => e.shortname === gameName);
  }

  getGames(): Game[] {
    return this.games;
  }

  getGameNames(): Array<Game> {
    let array = [];
    this.games.forEach(game => array.push(game.gamename));
    return array;
  }

  saveGame(options: GameAdd) {
    let body = new URLSearchParams();
    body.set('password', options.password);
    body.set('gamename', options.name);
    body.set('url', options.url);
    return this.http.post('/games/api/games/add', body)
      .map(res => {
        return res.text();
      });
  }

  delGame(options: GameDel) {
    let body = new URLSearchParams();
    body.set('password', options.password);
    body.set('gamename', options.name);
    return this.http.post('/games/api/games/delete', body)
      .map(res => {
        return res.text();
      })
  }

}
