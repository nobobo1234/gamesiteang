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
  options;

  constructor(private gamesService: GamesService, private router: Router, private route: ActivatedRoute) {
    this.options = [{ data: this.gamesService.getGameNames(),
      limit: 10,
      minLength: 2 }];
  }

  ngOnInit() {
  }

  applySearch(event) {
    let game: Game;
    if(typeof event === 'string') {
      game = this.gamesService.getGames().find((e) => e.gamename === event);
    } else {
      game = this.gamesService.getGames().find((e) => e.gamename === event.target.value);
    }
    this.router.navigate([`./game/${game.shortname}`], {relativeTo: this.route});
  }

  navigateToAdd() {
    this.router.navigate([`./add`], { relativeTo: this.route });
  }
}
