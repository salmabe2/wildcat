import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HtmlLoaderService {
  constructor(private http: HttpClient) {}

  loadHtml(templateName: string): Observable<string> {
    return this.http.get(`assets/publications/${templateName}.html`, { responseType: 'text' });
  }
}
