import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultativeListComponent } from './facultative-list.component';

describe('FacultativeListComponent', () => {
  let component: FacultativeListComponent;
  let fixture: ComponentFixture<FacultativeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultativeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultativeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
