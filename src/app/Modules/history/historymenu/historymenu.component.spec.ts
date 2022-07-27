import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorymenuComponent } from './historymenu.component';

describe('HistorymenuComponent', () => {
  let component: HistorymenuComponent;
  let fixture: ComponentFixture<HistorymenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorymenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorymenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
