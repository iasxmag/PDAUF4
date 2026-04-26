import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitanPageComponent } from './capitan-page.component';

describe('CapitanPageComponent', () => {
  let component: CapitanPageComponent;
  let fixture: ComponentFixture<CapitanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapitanPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapitanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
