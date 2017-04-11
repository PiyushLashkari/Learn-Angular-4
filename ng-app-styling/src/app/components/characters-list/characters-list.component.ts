import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { Character } from '../../classes/character';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
  providers: [CharactersService]
})
export class CharactersListComponent implements OnInit {

  characters: Character[];

  constructor(private characterService: CharactersService) { }

  getCharacters(): void {
    this.characterService.getCharacter().then(characters => this.characters = characters);
  }

  ngOnInit() {
    this.getCharacters();
  }

}
