import { Component, OnInit } from '@angular/core';
import { Parts } from '../parts';
import { PartsService } from '../parts-service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  constructor(private partsService: PartsService) { }

  public parts: Parts[];

  ngOnInit(): void {
    this.partsService.getNewestParts().subscribe((parts: Parts[]) => {
      this.parts = parts;
    });
  }

}
