import { Component, OnInit } from '@angular/core';
import { Parts} from "../parts";
import { AllParts } from "../all-parts";
import { PartsService } from "../parts-service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {
  rForm: FormGroup;
  parts: AllParts[];
  models: string[];
  Parts: Parts;
  dateNow = Date.now();


  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private partService: PartsService,
  )
 { 
  this.rForm = this.fb.group({
    name: ["", Validators.required],
    desc: ["", Validators.required],
    type: ["", Validators.required],
    year: ["", Validators.required],
    ImageUrl: ["", Validators.required],
  });

 }

 

  ngOnInit(): void {
    
  }
  postPart() {
    console.log(this.rForm.value);
    this.partService
      .postPart({ ...this.rForm.value, date: this.dateNow })
      .subscribe((data: any[]) => {
        if (data) {
          console.log("It works");
          this.toHome();
        }
      });
  }

  toHome(){
    this.router.navigate(["Home"]);
  }

}
