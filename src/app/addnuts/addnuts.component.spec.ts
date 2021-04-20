import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnutsComponent } from './addnuts.component';

describe('AddnutsComponent', () => {
  let component: AddnutsComponent;
  let fixture: ComponentFixture<AddnutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
