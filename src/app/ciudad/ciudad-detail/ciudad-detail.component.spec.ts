/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { CiudadDetailComponent } from './ciudad-detail.component';
import { faker } from '@faker-js/faker';
import { CiudadDetail} from "../ciudad-detail";
import { Pais } from 'src/app/pais/pais';


describe('CiudadDetailComponent', () => {
  let component: CiudadDetailComponent;
  let fixture: ComponentFixture<CiudadDetailComponent>;
  let debug: DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],

      declarations: [ CiudadDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadDetailComponent);
    component = fixture.componentInstance;
    let pais =new Pais(  faker.datatype.number(),  faker.lorem.sentence(),  faker.lorem.sentence(), faker.image.imageUrl() )
    component.ciudadDetail = new CiudadDetail( faker.datatype.number(),  faker.lorem.sentence(),   faker.image.imageUrl(), faker.lorem.sentence(), pais);
    fixture.detectChanges();
    debug = fixture.debugElement;


  });


  it('should have an img element', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.ciudadDetail.nombre
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }
  );

  it('should have a div element for the detail', () => {
    expect(debug.query(By.css('div')).attributes['class']).toEqual('detalle');
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

});
