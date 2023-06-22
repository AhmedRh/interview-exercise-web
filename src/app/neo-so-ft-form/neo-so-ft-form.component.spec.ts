import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoSoFtFormComponent } from './neo-so-ft-form.component';

describe('NeoSoFtFormComponent', () => {
  let component: NeoSoFtFormComponent;
  let fixture: ComponentFixture<NeoSoFtFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeoSoFtFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeoSoFtFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
