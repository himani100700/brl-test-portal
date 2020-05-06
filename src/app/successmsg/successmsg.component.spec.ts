import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessmsgComponent } from './successmsg.component';

describe('SuccessmsgComponent', () => {
  let component: SuccessmsgComponent;
  let fixture: ComponentFixture<SuccessmsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessmsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
