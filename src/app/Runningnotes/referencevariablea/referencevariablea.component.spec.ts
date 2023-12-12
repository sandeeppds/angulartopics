import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencevariableaComponent } from './referencevariablea.component';

describe('ReferencevariableaComponent', () => {
  let component: ReferencevariableaComponent;
  let fixture: ComponentFixture<ReferencevariableaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReferencevariableaComponent]
    });
    fixture = TestBed.createComponent(ReferencevariableaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
