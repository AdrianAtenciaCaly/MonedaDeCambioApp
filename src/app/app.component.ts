import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyService } from './currency.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Moneda De CambioApp';
  amount: number = 1; // Cantidad predeterminada
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  conversionResult: any;

  constructor(private currencyService: CurrencyService) { }

  getCurrencies(): string[] {
    return this.currencyService.getCurrencies();
  }

  convert(): void {
    this.currencyService.convert(this.fromCurrency, this.toCurrency, this.amount)
      .subscribe(
        (response: any) => {
          console.log(response);
          if (response.result === 'success') {
            this.conversionResult = response.conversion_rates;
          } else {
            console.error('Error en la respuesta de la API:', response);
          }
        },
        error => {
          console.error('Error al llamar a la API:', error);
        }
      );
  }
}