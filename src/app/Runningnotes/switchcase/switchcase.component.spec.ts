import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchcaseComponent } from './switchcase.component';

describe('SwitchcaseComponent', () => {
  let component: SwitchcaseComponent;
  let fixture: ComponentFixture<SwitchcaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchcaseComponent]
    });
    fixture = TestBed.createComponent(SwitchcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
