import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBodymainComponent } from './index-bodymain.component';

describe('IndexBodymainComponent', () => {
  let component: IndexBodymainComponent;
  let fixture: ComponentFixture<IndexBodymainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexBodymainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexBodymainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
