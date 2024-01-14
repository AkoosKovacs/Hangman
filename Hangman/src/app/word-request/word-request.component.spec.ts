import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordRequestComponent } from './word-request.component';

describe('WordRequestComponent', () => {
  let component: WordRequestComponent;
  let fixture: ComponentFixture<WordRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WordRequestComponent]
    });
    fixture = TestBed.createComponent(WordRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
