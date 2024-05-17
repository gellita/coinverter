import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentConverterComponent } from './my-component-converter.component';

describe('MyComponentConverterComponent', () => {
  let component: MyComponentConverterComponent;
  let fixture: ComponentFixture<MyComponentConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponentConverterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyComponentConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
