import { Component, OnInit } from '@angular/core';
import { Parts } from "../parts";
import { ActivatedRoute, Router } from "@angular/router";
import { PartsService } from "../parts-service";
@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.scss']
})
export class ItemsDetailsComponent implements OnInit {
  partId: string;
  part: Parts;

  constructor(
    private activatedRoute: ActivatedRoute,
    private partsService: PartsService,
    private router: Router
  ) {
    this.partId = this.activatedRoute.snapshot.paramMap.get("id");
   }

  ngOnInit(){
    this.partsService.getPartById(this.partId);
  }

  deletePart() {
    this.partsService.deletePart(this.partId).subscribe((res) => {
      this.toHome();
    });
  }

  toHome() {
    this.router.navigate(["Home"]);
  }

}
