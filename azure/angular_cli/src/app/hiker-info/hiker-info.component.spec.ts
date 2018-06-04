import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HikerInfoComponent } from './hiker-info.component';

describe('HikerInfoComponent', () => {
  let component: HikerInfoComponent;
  let fixture: ComponentFixture<HikerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
