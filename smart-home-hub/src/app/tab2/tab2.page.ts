import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  thermoOff: boolean;
  targetTemp: any = 26;
  waterTemp: number = 20;

  constructor() {}

  offTargetTemp(){
    this.targetTemp = '--';
    this.thermoOff = true;
    
  }

  onTargetTemp(){
    this.targetTemp = 26;
    this.thermoOff = false;
  }

  upTargetTemp()
  {
  if(this.targetTemp >= 21 && this.targetTemp <= 34)
  this.targetTemp++;  
  else
  this.targetTemp = 34;
  }

  downTargetTemp()
  {
    if(this.targetTemp >= 21 && this.targetTemp <= 34)
  this.targetTemp--;  
  else
  this.targetTemp = 21;
	
  }

  upWaterTemp()
  {
  if(this.waterTemp >= 20 && this.waterTemp <= 45)
  this.waterTemp++;  
  else
  this.waterTemp = 45;
  }

  downWaterTemp()
  {
  if(this.waterTemp >= 20 && this.waterTemp <= 45)
  this.waterTemp--;  
  else
  this.waterTemp = 20;
  }


  }


