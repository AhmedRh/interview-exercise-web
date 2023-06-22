import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoSoFtComponent } from './neo-so-ft.component';

describe('NeoSoFtComponent', () => {
  let component: NeoSoFtComponent;
  let fixture: ComponentFixture<NeoSoFtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeoSoFtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeoSoFtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
