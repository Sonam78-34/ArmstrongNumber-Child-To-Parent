import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmstrongComponentComponent } from './armstrong-component.component';

describe('ArmstrongComponentComponent', () => {
  let component: ArmstrongComponentComponent;
  let fixture: ComponentFixture<ArmstrongComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmstrongComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmstrongComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
