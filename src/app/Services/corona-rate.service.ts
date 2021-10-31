import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaRateService {
  globalApiUrl = 'https://covid19.mathdro.id/api';
  countriesApiUrl = 'https://covid19.mathdro.id/api/countries';
  countryDetailsApiUrl = 'https://covid19.mathdro.id/api/countries/'
  constructor(private httpClient: HttpClient) { }

  getGlobalDetails():Observable<any>{
    return this.httpClient.get(this.globalApiUrl)
  }
  getCountries():Observable<any>{
    return this.httpClient.get(this.countriesApiUrl)
  }
  getCountryDetails(country: any):Observable<any>{
    return this.httpClient.get(this.countryDetailsApiUrl+country)
  }
}
