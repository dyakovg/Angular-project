import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Parts } from '../parts';
import { PartsService } from '../parts-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {

  constructor(private partsService: PartsService, private router: Router, private route: ActivatedRoute) { }

  @ViewChild('query') queryField;
  public results: Parts[] = null;

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params.q) {
        this.search(params.q);
        this.queryField.nativeElement.value = params.q;
      }
    })
  }

  setSearch(event) {
    event.preventDefault();

    this.router.navigate([], { 
      relativeTo: this.route, 
      queryParamsHandling: 'merge',
      queryParams: {
        q: this.queryField.nativeElement.value
      }
    })

  }

  search(query: string) {
    this.partsService.getSearchedParts(query).subscribe((parts: Parts[]) => {
      this.results = parts;
    })
  }

}
