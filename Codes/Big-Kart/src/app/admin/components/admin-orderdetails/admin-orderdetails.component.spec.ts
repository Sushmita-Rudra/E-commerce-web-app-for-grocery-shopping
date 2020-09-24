import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderdetailsComponent } from './admin-orderdetails.component';

describe('AdminOrderdetailsComponent', () => {
  let component: AdminOrderdetailsComponent;
  let fixture: ComponentFixture<AdminOrderdetailsComponent>;

  beforeEach(async(() => {
    // TestBed.configureTestingModule({
      declarations: [ AdminOrderdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrderdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
