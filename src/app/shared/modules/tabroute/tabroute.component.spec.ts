import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabrouteComponent } from './tabroute.component';

describe('TabrouteComponent', () => {
  let component: TabrouteComponent;
  let fixture: ComponentFixture<TabrouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabrouteComponent]
    });
    fixture = TestBed.createComponent(TabrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
