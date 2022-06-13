import {ComponentFixture, TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>
  let de: DebugElement;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  })

  it('Should create the app', () => {

    expect(component).toBeTruthy();
  })

  it('should have the correct title', () => {
    const title = "Easy Words";
    expect(component.title).toEqual(title);
  })

  it('should render an updated title', ()=> {
    // Arrange
    const newTitle = 'Easy Words';
    const titleElement = de.query(By.css('.title'))
    // Act
    component.title = newTitle;
    fixture.detectChanges();
    // Assert
    expect(titleElement.nativeElement.innerText).toBe(newTitle);
  })
});


