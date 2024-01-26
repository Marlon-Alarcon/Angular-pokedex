/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Tarjeta_pokemonComponent } from './tarjeta_pokemon.component';

describe('Tarjeta_pokemonComponent', () => {
  let component: Tarjeta_pokemonComponent;
  let fixture: ComponentFixture<Tarjeta_pokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tarjeta_pokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tarjeta_pokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
