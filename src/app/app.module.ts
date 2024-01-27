import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Detalle_pokemonComponent } from './components/detalle_pokemon/detalle_pokemon.component';
import { HomeComponent } from './pages/home/home.component';
import { Foto_pokemonComponent } from './components/foto_pokemon/foto_pokemon.component';
import { Tarjeta_pokemonComponent } from './components/tarjeta_pokemon/tarjeta_pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Detalle_pokemonComponent,
    Foto_pokemonComponent,
    Tarjeta_pokemonComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
