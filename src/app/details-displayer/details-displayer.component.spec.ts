import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDisplayerComponent } from './details-displayer.component';

describe('DetailsDisplayerComponent', () => {
  let component: DetailsDisplayerComponent;
  let fixture: ComponentFixture<DetailsDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
