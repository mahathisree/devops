import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CereComponent } from './cere.component';

describe('CereComponent', () => {
  let component: CereComponent;
  let fixture: ComponentFixture<CereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
