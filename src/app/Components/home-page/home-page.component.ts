import { Component, OnInit } from '@angular/core';
import { CoronaRateService } from 'src/app/Services/corona-rate.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  data: any;
  confirmed: number = 0;
  deaths: number = 0;
  recovered: any;
  lastUpdate: any;

  constructor(private coronaService: CoronaRateService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.coronaService.getGlobalDetails().subscribe(res=>{
      this.confirmed = res.confirmed.value;
      this.deaths = res.deaths.value;
      this.recovered = res.recovered.value;
      this.lastUpdate = res.lastUpdate
      this.data = {
        labels: ['Confirmed','Deaths', 'Recovered'],
        datasets: [
            {
                data: [this.confirmed, this.deaths, this.recovered],
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
