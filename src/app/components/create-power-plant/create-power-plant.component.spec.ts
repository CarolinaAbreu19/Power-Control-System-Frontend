import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePowerPlantComponent } from './create-power-plant.component';

describe('CreatePowerPlantComponent', () => {
  let component: CreatePowerPlantComponent;
  let fixture: ComponentFixture<CreatePowerPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePowerPlantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePowerPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
