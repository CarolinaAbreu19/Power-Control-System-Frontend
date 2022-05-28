import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePowerPlantComponent } from './update-power-plant.component';

describe('UpdatePowerPlantComponent', () => {
  let component: UpdatePowerPlantComponent;
  let fixture: ComponentFixture<UpdatePowerPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePowerPlantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePowerPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
