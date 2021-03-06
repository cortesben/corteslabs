import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenComponent } from './content.component';

describe('ContentComponent', () => {
  let component: BenComponent;
  let fixture: ComponentFixture<BenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
