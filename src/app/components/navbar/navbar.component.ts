import { Component, OnInit } from '@angular/core';
import { GamesService } from "../../services/games.service";
import {Game} from "../../interfaces/game";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  games: Game[];

  constructor(private gamesService: GamesService) {
  }

  ngOnInit() {
    this.games = this.gamesService.getGames();
  }

}
