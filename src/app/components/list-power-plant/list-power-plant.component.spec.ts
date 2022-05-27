import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPowerPlantComponent } from './list-power-plant.component';

describe('ListPowerPlantComponent', () => {
  let component: ListPowerPlantComponent;
  let fixture: ComponentFixture<ListPowerPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPowerPlantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPowerPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
