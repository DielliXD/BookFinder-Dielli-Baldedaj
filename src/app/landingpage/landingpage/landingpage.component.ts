import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  books: any[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.loadRandomBooks();
  }

  loadRandomBooks(): void {
    this.loading = true;
    this.error = '';
    this.bookService.getBooks().subscribe(
      (response: any) => {
        const totalBooks = response.items.length;
        const randomIndexes: number[] = [];
        while (randomIndexes.length < 20) {
          const randomIndex = Math.floor(Math.random() * totalBooks);
          if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
          }
        }
        this.books = randomIndexes.map(index => response.items[index]);
        this.loading = false;
      },
      (error: any) => {
        console.error('Error fetching books:', error);
        this.error = 'Error fetching books. Please try again.';
        this.loading = false;
      }
    );
  }

  onSearch(query: string): void {
    console.log("Search query:", query);
    this.bookService.searchBooks(query).subscribe(
      (response: any) => {
        this.books = response.items;
      },
      (error: any) => {
        console.error('Error searching books:', error);
        this.error = 'Error searching books. Please try again.';
      }
    );
  }

  showBook(idBook: string): void {
    this.router.navigate(['/book-info', idBook]);
  }
}
