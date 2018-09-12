
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAppComponent } from './dashboard-app.component';

describe('DashboardAppComponent', () => {
  let component: DashboardAppComponent;
  let fixture: ComponentFixture<DashboardAppComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
