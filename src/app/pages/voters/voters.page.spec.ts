import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VotersPage } from './voters.page';

describe('VotersPage', () => {
  let component: VotersPage;
  let fixture: ComponentFixture<VotersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VotersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
