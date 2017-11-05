import { GamesService } from '../../services/games.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {Game} from "../../interfaces/game";


@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  value: string;

  constructor(private gamesService: GamesService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  applySearch(event) {
    let game: Game;
    console.log(event);
    if(typeof event === 'string') {
      game = this.gamesService.getGames().find((e) => e.name === event);
    } else {
      game = this.gamesService.getGames().find((e) => e.name === event.target.value);
    }
    this.router.navigate([`./game/${game.shortname}`], {relativeTo: this.route});
  }
}
