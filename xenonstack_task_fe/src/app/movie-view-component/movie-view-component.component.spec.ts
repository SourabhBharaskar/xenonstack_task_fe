import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieViewComponentComponent } from './movie-view-component.component';

describe('MovieViewComponentComponent', () => {
  let component: MovieViewComponentComponent;
  let fixture: ComponentFixture<MovieViewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieViewComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
