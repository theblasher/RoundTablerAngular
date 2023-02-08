import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RoundTabler';

  constructor(private formBuilder: FormBuilder) {
  }

  scanTypes = [
    {title: "NACHA", value: "nacha"},
    {title: "PCI", value: "pci"},
    {title: "Both", value: "both"}
  ]

  roundTablerForm = this.formBuilder.group({
    scanType: [null, Validators.required],
    dbType: ['', Validators.required],
    dbServerAddress: ['', Validators.required],
    dbUsername: ['', Validators.required],
    dbPassword: ['', Validators.required],
    dbName: ['', Validators.required],

  });

  onClick() {
    console.log(this.roundTablerForm.value)
  }
}
