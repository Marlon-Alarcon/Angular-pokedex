import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatoPokemon } from '../interfaces/pokeapi';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

constructor(private httpclient : HttpClient) { }

getpokemon(): Observable<DatoPokemon>{
  return this.httpclient.get('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0') as Observable<DatoPokemon>
}

getpokemonId(id:string){
  return this.httpclient.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
}


getDescripcion(){}

}
