import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgParentContent } from './ng-parent-content';

describe('NgParentContent', () => {
  let component: NgParentContent;
  let fixture: ComponentFixture<NgParentContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgParentContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgParentContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
