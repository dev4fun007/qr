import { Component, OnInit } from '@angular/core';
import { StorageutilService } from '../services/storageutil.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  historyCount = 0;

  constructor(private storageUtilService: StorageutilService) { }

  ngOnInit() {
    this.updateHistoryCount();
  }

  updateHistoryCount() {
    this.historyCount = this.storageUtilService.getHistoryCount();
  }


}
