import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './Project/Components/card/card.component';
import { CardrowComponent } from './Project/Components/cardrow/cardrow.component';
import { BoardComponent } from './Project/Components/board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardrowComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
