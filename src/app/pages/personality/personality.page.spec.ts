import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalityPage } from './personality.page';

describe('PersonalityPage', () => {
  let component: PersonalityPage;
  let fixture: ComponentFixture<PersonalityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
