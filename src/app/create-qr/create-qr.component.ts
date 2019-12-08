import { Component, OnInit } from '@angular/core';
import { StorageutilService } from '../services/storageutil.service';
import { MatSnackBar } from '@angular/material';
import { RestutilService } from '../services/restutil.service';

@Component({
  selector: 'app-create-qr',
  templateUrl: './create-qr.component.html',
  styleUrls: ['./create-qr.component.css']
})
export class CreateQrComponent implements OnInit {

  qrCodeImage = '../../../assets/download.png';
  showProgressSpinner = false;
  qrText: string;
  currentQR;

  showBackButton = true;
  title = 'Generate New QR Code';
  showHistoryNav = true;


  constructor(private snackBar: MatSnackBar,
      private restutil: RestutilService,
      private storageService: StorageutilService) { }

  ngOnInit() {
  }

  createQrCode() {
    //Check if any value is given for the qr code text
    if (!!this.qrText) {      
      //Make the http call to load qr code
      this.loadQRCodeImage(this.qrText);
    } else {
      //Show snackbar
      this.showSnackbar('Enter some text first')
    }
  }


  public loadQRCodeImage(text: string) {
    // Show progress spinner as the request is being made
    this.showProgressSpinner = true;

    // Trigger the API call
    this.restutil.getQRCode(text).subscribe(image =>{
      // Received the result - as an image blob - require parsing
      this.createImageBlob(image);
    }, error => {
      console.log('Cannot fetch QR code from the url', error)
      // Hide the spinner - show a proper error message
      this.showProgressSpinner = false;
    });
  }


  private createImageBlob(image: Blob) {
    // Create a file reader to read the image blob
    const reader = new FileReader();
    // Add event listener for "load" - invoked once the blob reading is complete
    reader.addEventListener('load', () => {
      this.qrCodeImage = reader.result.toString();
      //Hide the progress spinner
      this.showProgressSpinner = false;
      this.currentQR = reader.result.toString();
    }, false);

    // Read image blob if it is not null or undefined
    if (image) {
      reader.readAsDataURL(image);
    }
  }


  saveQR() {
    if (!!this.qrText) {
      this.storageService.saveHistory(this.qrText, this.currentQR);
      this.showSnackbar('QR saved')
    } else {
      //Show snackbar
      this.showSnackbar('Enter some text first')
    }
    
  }

  showSnackbar(msg: string) {
    //Show snackbar
    this.snackBar.open(msg, '', {
      duration: 2000,
      panelClass: ['snackbarColor']
    });
  }

}
