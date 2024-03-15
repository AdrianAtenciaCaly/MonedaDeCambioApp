import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getCurrencies(): string[] {
    return [
      'USD', // Dólar estadounidense
  'EUR', // Euro
  'GBP', // Libra esterlina
  'JPY', // Yen japonés
  'CAD', // Dólar canadiense
  'AUD', // Dólar australiano
  'CHF', // Franco suizo
  'CNY', // Yuan chino
  'HKD', // Dólar de Hong Kong
  'NZD', // Dólar neozelandés
  'SEK', // Corona sueca
  'KRW', // Won surcoreano
  'SGD', // Dólar de Singapur
  'NOK', // Corona noruega
  'MXN', // Peso mexicano
  'INR', // Rupia india
  'RUB', // Rublo ruso
  'ZAR', // Rand sudafricano
  'BRL', // Real brasileño
  'TRY', // Lira turca
  'PLN', // Złoty polaco
  'IDR', // Rupia indonesia
  'TWD', // Nuevo dólar taiwanés
  'THB', // Baht tailandés
  'SAR', // Riyal saudí
  'AED', // Dirham de los Emiratos Árabes Unidos
  'CZK', // Corona checa
  'CLP', // Peso chileno
  'EGP', // Libra egipcia
  'PHP', // Peso filipino
  'MYR', // Ringgit malayo
  'HUF', // Florín húngaro
  'VND', // Dong vietnamita
  'IQD', // Dinar iraquí
  'ARS', // Peso argentino
  'DKK', // Corona danesa
  'ILS', // Shekel israelí
  'KWD', // Dinar kuwaití
  'NPR', // Rupia nepalesa
  'PKR', // Rupia pakistaní
  'UAH', // Hryvnia ucraniano
  'COP', // Peso colombiano
  'HRK', // Kuna croata
  'RON', // Leu rumano
  'QAR', // Riyal qatarí
    ];
  }

  convert(fromCurrency: string, toCurrency: string, amount: number) {
    const apiUrl = `https://v6.exchangerate-api.com/v6/5298ac035c3775bc8cb61132/latest/${fromCurrency}`;
    return this.http.get(apiUrl);
  }
}
