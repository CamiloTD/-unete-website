import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBodyMiddleComponent } from './index-body-middle.component';

describe('IndexBodyMiddleComponent', () => {
  let component: IndexBodyMiddleComponent;
  let fixture: ComponentFixture<IndexBodyMiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexBodyMiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexBodyMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
