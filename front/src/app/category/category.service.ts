import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from './model/Category';
import { Loans } from './model/Loans';
import { CATEGORY_DATA } from './model/mock-categories';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories(route: String): Observable<Category[]> {
    return this.http.get<Category[]>(`http://localhost:8080/${route}`);
  }

  getCategoriesLoans(route: String): Observable<Loans[]> {
    return this.http.get<Loans[]>(`http://localhost:8080/${route}`);
  }

  saveCategory(route: String, category: Category): Observable<Category> {
    let url = `http://localhost:8080/${route}`;
    if (category.id != null) url += '/' + category.id;

    return this.http.put<Category>(url, category);
  }

  saveCategoryLoans(route: String, loans: Loans): Observable<Loans> {
    let url = `http://localhost:8080/${route}`;

    if (loans.id != null) url += '/' + loans.id;

    loans.returnDate = loans.returnDate.replace('T', ' ');
    loans.loanDate = loans.loanDate.replace('T', ' ');

    return this.http.put<Loans>(url, loans);
  }

  deleteCategory(route: String, idCategory: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/${route}/` + idCategory);
  }
}
