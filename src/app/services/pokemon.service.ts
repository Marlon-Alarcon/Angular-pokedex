import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatoPokemon } from '../interfaces/pokeapi';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

constructor(private httpclient : HttpClient) { }

getpokemon(page:number, limit: number = 40): Observable<DatoPokemon>{

  const offset = limit*(page-1);
  return this.httpclient.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`) as Observable<DatoPokemon>
}

getpokemonId(id:string): Observable<Pokemon>{
  return this.httpclient.get(`https://pokeapi.co/api/v2/pokemon/${id}`)as Observable<Pokemon>
}


getDescripcion(){}

}
