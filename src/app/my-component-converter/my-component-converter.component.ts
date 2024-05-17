import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../service/currency.service';
import {Currency, CurrencyData} from '../service/currency';
@Component({
  selector: 'app-my-component-converter',
  templateUrl: './my-component-converter.component.html',
  styleUrls: ['./my-component-converter.component.css']
})
export class MyComponentConverterComponent implements OnInit {
  RUSCurrency: number;
  EURCurrency = 'EUR';
  USDCurrency = 'USD';
  USDCurrencyRate: number;
  EURCurrencyRate: number;

  constructor(private currencyService: CurrencyService) {
    this.RUSCurrency = 0;
    this.USDCurrencyRate = 0;
    this.EURCurrencyRate = 0;
  }

  ngOnInit() {
  }

  onCurrencyInputChange(currency: string) {
    this.currencyService.getExchangeRates()
      .subscribe((data: CurrencyData) => {
        if (currency === 'RUS') {
          this.EURCurrencyRate = this.RUSCurrency / data.Valute[this.EURCurrency].Value;
          this.USDCurrencyRate = this.RUSCurrency / data.Valute[this.USDCurrency].Value;
        } else if (currency === 'EUR') {
          this.RUSCurrency = data.Valute[this.EURCurrency].Value * this.EURCurrencyRate;
          this.USDCurrencyRate = this.RUSCurrency / data.Valute[this.USDCurrency].Value;
        } else if (currency === 'USD') {
          this.RUSCurrency = data.Valute[this.USDCurrency].Value * this.USDCurrencyRate;
          this.EURCurrencyRate = this.RUSCurrency / data.Valute[this.EURCurrency].Value;
        }
      });
  }
}
