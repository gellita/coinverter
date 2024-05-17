import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../service/currency.service';
import {Currency, CurrencyData} from '../service/currency';

@Component({
  selector: 'app-my-component-converter',
  templateUrl: './my-component-converter.component.html',
  styleUrl: './my-component-converter.component.css'
})
export class MyComponentConverterComponent implements OnInit{
  RUSCurrency:number;
  EURCurrency = 'EUR' ;
  USDCurrency = 'USD';
  // message: string = "";
  // @ts-ignore
  USDCurrencyRate:number;
  // @ts-ignore
  EURCurrencyRate: number;


  constructor(private currencyService: CurrencyService) {
      this.RUSCurrency = 0;
    }


  ngOnInit() {
    // this.onInputChange();
  }

  onRUSInputChange($event: Event) {
    this.currencyService.getExchangeRates()
      .subscribe((data:CurrencyData) => {
        this.EURCurrencyRate = this.RUSCurrency / data.Valute[this.EURCurrency].Value;
        this.USDCurrencyRate = this.RUSCurrency / data.Valute[this.USDCurrency].Value;
        // if (this.RUSCurrency == 100){
        //   this.message = "Не имей сто рублей, а имей сто друзей"
        // }
      });
  }

  onEURInputChange($event: Event) {
    this.currencyService.getExchangeRates()
      .subscribe((data:CurrencyData) => {
        this.RUSCurrency = data.Valute[this.EURCurrency].Value * this.EURCurrencyRate ;
        this.USDCurrencyRate = this.RUSCurrency / data.Valute[this.USDCurrency].Value;
      });
  }

  onUSDInputChange($event: Event) {
    this.currencyService.getExchangeRates()
      .subscribe((data:CurrencyData) => {
        this.RUSCurrency = data.Valute[this.USDCurrency].Value * this.USDCurrencyRate
        this.EURCurrencyRate = this.RUSCurrency / data.Valute[this.EURCurrency].Value ;

      });
  }
}
