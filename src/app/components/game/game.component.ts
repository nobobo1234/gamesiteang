import { Component, OnInit } from '@angular/core';
import { GamesService } from "../../services/games.service";
import {Game} from "../../interfaces/game";
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game: Game;

  constructor(private gamesService: GamesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) => {
      let gamename = params.get('gamename');
      this.game = this.gamesService.getGame(gamename);
    });
  }

}
