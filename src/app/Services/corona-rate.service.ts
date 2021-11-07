import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoronaRateService {
  constructor(private httpClient: HttpClient) { }

  getGlobalDetails():Observable<any>{
    return this.httpClient.get(environment.globalApiUrl)
  }
  getCountries():Observable<any>{
    return this.httpClient.get(environment.countriesApiUrl)
  }
  getCountryDetails(country: any):Observable<any>{
    return this.httpClient.get(environment.countryDetailsApiUrl+country)
  }
}
