import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagesModalEditPage } from './pages-modal-edit.page';

describe('PagesModalEditPage', () => {
  let component: PagesModalEditPage;
  let fixture: ComponentFixture<PagesModalEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesModalEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagesModalEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
