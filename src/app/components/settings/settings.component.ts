import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../../services/settings.service'
import{Settings} from '../../models/Settings';
import { FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
 settings:Settings;
  constructor(
    private settingsService: SettingsService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit(): void {
    this.settings=this.settingsService.getSettings();
  }

  onSubmit(){
this.settingsService.changeSettings(this.settings);
this.flashMessage.show('Settings saved', {
  cssClass:'alert-success', timeout:4000
});
  }

}
