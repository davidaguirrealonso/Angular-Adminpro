import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficalComponent } from './grafical.component';

describe('GraficalComponent', () => {
  let component: GraficalComponent;
  let fixture: ComponentFixture<GraficalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
