import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantaRevelerComponent } from './santa-reveler.component';

describe('SantaRevealerComponent', () => {
  let component: SantaRevelerComponent;
  let fixture: ComponentFixture<SantaRevelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SantaRevelerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SantaRevelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
