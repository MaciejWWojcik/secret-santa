import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantaGeneratorComponent } from './santa-generator.component';

describe('SantaGeneratorComponent', () => {
  let component: SantaGeneratorComponent;
  let fixture: ComponentFixture<SantaGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SantaGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SantaGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
