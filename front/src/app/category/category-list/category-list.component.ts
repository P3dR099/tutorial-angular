import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from '../model/Category';
import { CategoryService } from '../category.service';
import { MatDialog } from '@angular/material/dialog';
import { CategoryEditComponent } from '../category-edit/category-edit.component';
import { DialogConfirmationComponent } from '../../core/dialog-confirmation/dialog-confirmation.component';
import { Router, NavigationEnd } from '@angular/router';
import { getRoutes } from '../../config/app.configs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  dataSource = new MatTableDataSource<Category>();
  displayedColumns: string[] = ['id', 'name', 'action'];
  route: String = getRoutes(this.router);

  constructor(
    private categoryService: CategoryService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories(this.route).subscribe((categories) => {
      this.dataSource.data = categories;
    });
  }

  createCategory() {
    const dialogRef = this.dialog.open(CategoryEditComponent, {
      data: {},
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  editCategory(category: Category) {
    const dialogRef = this.dialog.open(CategoryEditComponent, {
      data: { category: category },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  deleteCategory(category: Category) {
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      data: {
        title: 'Eliminar categoría',
        description:
          'Atención si borra la categoría se perderán sus datos.<br> ¿Desea eliminar la categoría?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.categoryService
          .deleteCategory(this.route, category.id)
          .subscribe((result) => {
            this.ngOnInit();
          });
      }
    });
  }
}
