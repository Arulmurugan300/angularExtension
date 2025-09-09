import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAnotomy } from './component-anotomy';

describe('ComponentAnotomy', () => {
  let component: ComponentAnotomy;
  let fixture: ComponentFixture<ComponentAnotomy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentAnotomy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentAnotomy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
