import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndInstructionComponent } from './front-end-instruction.component';

describe('FrontEndInstructionComponent', () => {
  let component: FrontEndInstructionComponent;
  let fixture: ComponentFixture<FrontEndInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontEndInstructionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontEndInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
