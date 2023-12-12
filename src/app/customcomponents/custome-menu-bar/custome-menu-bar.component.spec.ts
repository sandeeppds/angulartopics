import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeMenuBarComponent } from './custome-menu-bar.component';

describe('CustomeMenuBarComponent', () => {
  let component: CustomeMenuBarComponent;
  let fixture: ComponentFixture<CustomeMenuBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomeMenuBarComponent]
    });
    fixture = TestBed.createComponent(CustomeMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
