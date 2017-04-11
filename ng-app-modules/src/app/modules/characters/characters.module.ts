import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from '../characters/components/character/character.component';
import { CharactersListComponent } from '../characters/components/characters-list/characters-list.component';
import { CharactersService } from '../characters/services/characters.service';
import { CharacterRoutingModule } from '../characters/characters-routing.module';

@NgModule({
    imports: [
        CommonModule,
        CharacterRoutingModule
        ],
    declarations: [
        CharacterComponent, 
        CharactersListComponent
        ],
    providers: [CharactersService]
})

export class CharactersModule {}