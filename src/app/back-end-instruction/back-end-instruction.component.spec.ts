import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndInstructionComponent } from './back-end-instruction.component';

describe('BackEndInstructionComponent', () => {
  let component: BackEndInstructionComponent;
  let fixture: ComponentFixture<BackEndInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackEndInstructionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackEndInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
