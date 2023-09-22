import { TestBed, fakeAsync, flush } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UsersService } from './users.service';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { of } from 'rxjs';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers:[
        UsersService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title: Lista de Usuarios', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.container h1')?.textContent).toContain('Lista de Usuarios');
  });

  it('should get only 5 users', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const userServices = TestBed.inject(UsersService);
    spyOn(userServices, 'getUsers').and.returnValues(of([
      {
          "id": 5181847,
          "name": "Devani Mehrotra",
          "email": "mehrotra_devani@mcclure.example",
          "gender": "male",
          "status": "active"
      },
      {
          "id": 5181846,
          "name": "Balachandra Khanna",
          "email": "khanna_balachandra@ratke.test",
          "gender": "female",
          "status": "active"
      },
      {
          "id": 5181845,
          "name": "Veda Sharma",
          "email": "sharma_veda@ebert-price.example",
          "gender": "female",
          "status": "active"
      },
      {
          "id": 5181844,
          "name": "Gov. Gorakhanatha Ganaka",
          "email": "gorakhanatha_gov_ganaka@morar.test",
          "gender": "female",
          "status": "inactive"
      },
      {
          "id": 5181843,
          "name": "Trilochan Khan",
          "email": "khan_trilochan@murray.test",
          "gender": "female",
          "status": "inactive"
      },
  ]));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.users.length).toEqual(5);
    });
    flush();
  }));
});
