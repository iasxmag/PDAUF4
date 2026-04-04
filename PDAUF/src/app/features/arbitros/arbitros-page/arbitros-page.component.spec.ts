import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArbitrosPageComponent } from './arbitros-page.component';

describe('ArbitrosPageComponent', () => {
  let component: ArbitrosPageComponent;
  let fixture: ComponentFixture<ArbitrosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArbitrosPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArbitrosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
