import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Game} from "../interfaces/game";
import * as gamesJSON from '../../assets/games.json';

@Injectable()
export class GamesService {
  games: Game[] = [];

  constructor(private http: Http) {
    Object.entries(gamesJSON).forEach(([key, value]) => {
      let _value = value;
      _value['shortname'] = key;
      this.games.push(_value);
    })
    this.games.sort((a, b) => a.name.localeCompare(b.name));
  }

  getGame(gameName: string): Game {
    return this.games.find((e) => e.shortname === gameName);
  }

  getGames(): Game[] {
    return this.games;
  }

  getGameNames(): Object {
    let _object = {};
    Object.values(this.games).forEach(game => _object[game.name] = null)
    return _object;
  }

}
