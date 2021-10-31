import { Component, OnInit } from '@angular/core';
import { CoronaRateService } from 'src/app/Services/corona-rate.service';

@Component({
  selector: 'app-countries-details',
  templateUrl: './countries-details.component.html',
  styleUrls: ['./countries-details.component.scss']
})
export class CountriesDetailsComponent implements OnInit {
  countries: any;
  selectedCountries: any;
  data: any;
  confirmed: number = 0;
  deaths: number = 0;
  recovered: any;
  lastUpdate: any;
  constructor(private coronaService: CoronaRateService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(){
    this.coronaService.getCountries().subscribe(res=>{
      this.countries = res.countries
    })
  }

  selectCountry(){
    console.log(this.selectedCountries)
    if(this.selectedCountries){
    this.coronaService.getCountryDetails(this.selectedCountries).subscribe(res=>{
      this.confirmed = res.confirmed.value;
      this.deaths = res.deaths.value;
      this.recovered = res.recovered.value;
      this.lastUpdate = res.lastUpdate;
      this.data = {
        labels: ['Confirmed','Deaths', 'Recovered'],
        datasets: [
            {
                data: [res.confirmed.value, res.deaths.value, res.recovered.value],
                backgroundColor: [
                  "#2b7fe0",
                  "#96271d",
                  "#FFA726"
              ],
              hoverBackgroundColor: [
                  "#2b8ce0",
                  "#9c3930",
                  "#FFB74D"
              ]
            }
        ]
    };
    })
    }
  }

}
