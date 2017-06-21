import { TestBed, async } from '@angular/core/testing';

import { ManageCarsList } from './cars.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ManageCarsList
      ],
    }).compileComponents();
  }));

  it('should create the ManageCarsList', async(() => {
    const fixture = TestBed.createComponent(ManageCarsList);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
  
});