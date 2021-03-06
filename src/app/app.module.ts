import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { PlayerComponent } from './components/player/player.component';
import { UpdatesPanelComponent } from './components/updates-panel/updates-panel.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { GameComponent } from './components/game/game.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { TopUpdatesPipe } from './pipes/top-updates.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PlayerComponent,
    UpdatesPanelComponent,
    ControlPanelComponent,
    GameComponent,
    GameBoardComponent,
    TopUpdatesPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
