import { Injectable } from '@angular/core';
import { CHARACTERS } from '../classes/data-characters';
import { Character } from '../classes/character';

@Injectable()
export class CharactersService {

  constructor() { }

  getCharacter(): Promise<Character[]> {
    return Promise.resolve(CHARACTERS);
  }

}
