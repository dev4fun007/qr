import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestutilService {

  private edgeSize = '300';
  private BASE_URL = 'https://api.qrserver.com/v1/create-qr-code/?data={data}!&size={edge}x{edge}';

  constructor(private httpClient: HttpClient) { }


  public getQRCode(text: string): Observable<Blob> {
    // Create the url with the provided data and other options 
    let url = this.BASE_URL;
    url = url.replace("{data}", text).replace(/{edge}/g, this.edgeSize);

    // Make the http api call to the url
    return this.httpClient.get(url, {
      responseType: 'blob'
    });
  }

}
