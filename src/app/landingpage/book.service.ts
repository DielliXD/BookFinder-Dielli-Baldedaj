import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    const params = new HttpParams()
      .set('q', 'subject:fiction') 
      .set('maxResults', '20')   
      .set('orderBy', 'relevance');
    return this.http.get<any>(this.apiUrl, { params });
  }
  
  bookInfo(idBook: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${idBook}`);
  }
  
  searchBooks(query: string, field?: string): Observable<any> {
    let queryString = query;
    if (field) {
      switch (field) {
        case 'author':
          queryString = `inauthor:${query}`;
          break;
        case 'isbn':
          queryString = `isbn:${query}`;
          break;
        case 'title':
          queryString = `intitle:${query}`;
          break;
        default:
          queryString = query;
          break;
      }
    }
    const params = { q: queryString, maxResults: '20' };
    return this.http.get<any>(this.apiUrl, { params });
  }
}
