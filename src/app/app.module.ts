import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { PlayerComponent } from './components/player/player.component';
import { BoardComponent } from './components/board/board.component';
import { UpdatesPanelComponent } from './components/updates-panel/updates-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PlayerComponent,
    BoardComponent,
    UpdatesPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
