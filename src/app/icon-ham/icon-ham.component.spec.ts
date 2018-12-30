import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconHamComponent } from './icon-ham.component';

describe('IconHamComponent', () => {
  let component: IconHamComponent;
  let fixture: ComponentFixture<IconHamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconHamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconHamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
