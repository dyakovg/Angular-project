import { Component, OnInit } from '@angular/core';
import { Parts } from "../parts";
import { Input } from "@angular/core";


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  @Input() part: Parts;

  constructor() { }

  ngOnInit(): void {
  }

}
