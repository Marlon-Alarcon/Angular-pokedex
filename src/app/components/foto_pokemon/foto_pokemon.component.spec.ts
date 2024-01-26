/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Foto_pokemonComponent } from './foto_pokemon.component';

describe('Foto_pokemonComponent', () => {
  let component: Foto_pokemonComponent;
  let fixture: ComponentFixture<Foto_pokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Foto_pokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Foto_pokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
