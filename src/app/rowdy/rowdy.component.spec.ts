import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowdyComponent } from './rowdy.component';

describe('RowdyComponent', () => {
  let component: RowdyComponent;
  let fixture: ComponentFixture<RowdyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowdyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowdyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
