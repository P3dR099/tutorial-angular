import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from '../category.service';
import { Category } from '../model/Category';
import { Router, NavigationEnd } from '@angular/router';
import { getRoutes } from '../../config/app.configs';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss'],
})
export class CategoryEditComponent implements OnInit {
  category: Category;
  route: String = getRoutes(this.router);

  constructor(
    public dialogRef: MatDialogRef<CategoryEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.data.category != null) {
      this.category = Object.assign({}, this.data.category);
    } else {
      this.category = new Category();
    }
  }

  onSave() {
    this.categoryService
      .saveCategory(this.route, this.category)
      .subscribe((result) => {
        this.dialogRef.close();
      });
  }

  onClose() {
    this.dialogRef.close();
  }
}
