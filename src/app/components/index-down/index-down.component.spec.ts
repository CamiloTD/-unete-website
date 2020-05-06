import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexDownComponent } from './index-down.component';

describe('IndexDownComponent', () => {
  let component: IndexDownComponent;
  let fixture: ComponentFixture<IndexDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
