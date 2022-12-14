import { Injectable } from '@angular/core';

import { city, country, state } from '../Model/country.model';
import { observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CountryDataService {

  baseApiUrl:string = environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  GetAllCountries(){
    return this.http.get<country[]>(this.baseApiUrl + 'api/Country/GetCountries');
  }

  GetAllState(country_code:string){
    return this.http.get<state[]>(this.baseApiUrl + 'api/State/GetStateBy/' + country_code);
  }

  GetAllCities(state_code:string) {
    return this.http.get<city[]>(this.baseApiUrl + 'api/City/GetCityBy/' + state_code);
  }

  // GetAllCountries(){
  //   return this.http.get<country[]>('assets/countries.json');
  // }

  // GetAllState(country_code:string){
  //   return this.http.get<state[]>('assets/countries_state.json/' + country_code);
  // }

  // GetAllCities(state_code:string) {
  //   return this.http.get<city[]>('assets/cities.json/' + state_code);
  // }
}
