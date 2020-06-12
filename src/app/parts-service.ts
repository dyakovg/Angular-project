import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Parts} from "./parts";
import { AllParts } from "./all-parts";


@Injectable({
  providedIn: "root",
})
export class PartsService {
  constructor(private http: HttpClient) {}

  getNewestParts(): Observable<Parts[]> {
    return this.http.get<Parts[]>(
      `http://localhost:3000/Parts?_sort=date&_order=desc&_limit=4`
    );
  }
  getSearchedParts(
    name: string,
    type?: string,
    year?: string,
  ): Observable<Parts[]> {
    return this.http.get<Parts[]>(
      `http://localhost:3000/Parts?name=${name}` +
        (type ? `&type=${type}` : ``) +
        (year ? `&year=${year}` : ``)
    );
  }
  // ternary expression

  postPart(Parts: Parts) {
    return this.http.post(`http://localhost:3000/Parts/`, Parts);
  }

  deletePart(id: string) {
    return this.http.delete(`http://localhost:3000/Parts/` + id);
  }

  getPartById(partId): Observable<Parts> {
    return this.http.get<Parts>(`http://localhost:3000/Parts/${partId}`);
  }

}
 