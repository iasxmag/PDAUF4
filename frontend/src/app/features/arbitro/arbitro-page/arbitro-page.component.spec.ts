import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { ArbitroPageComponent } from './arbitro-page.component';

describe('ArbitroPageComponent', () => {
  let component: ArbitroPageComponent;
  let fixture: ComponentFixture<ArbitroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArbitroPageComponent],
      providers: [provideHttpClient(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArbitroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
