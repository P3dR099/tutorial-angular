import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Loans } from '../model/Loans';
import { CategoryService } from '../category.service';
import { MatDialog } from '@angular/material/dialog';
import { LoansEditComponent } from '../loans-edit/loans-edit.component';
import { DialogConfirmationComponent } from '../../core/dialog-confirmation/dialog-confirmation.component';
import { Router, NavigationEnd } from '@angular/router';
import { getRoutes } from '../../config/app.configs';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.scss'],
})
export class LoansListComponent implements OnInit {
  dataSource = new MatTableDataSource<Loans>();
  displayedColumns: string[] = [
    'id',
    'nameGame',
    'nameClient',
    'loanDate',
    'returnDate',
    'action',
  ];
  route: String = getRoutes(this.router);
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  pageSize = 4;
  pageSizeOptions: number[] = [4, 8, 12];
  typeOfFilter: String;
  pageEvent: PageEvent;
  valueTitle: string;
  valueClient: string;
  valueDate: string;

  constructor(
    private categoryService: CategoryService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  applyFilter(event: Event, typeOfFilter: String) {
    this.typeOfFilter = typeOfFilter;
    const filterValue = (event.target as HTMLInputElement).value;
    filterValue.length !== 0
      ? (this.dataSource.filter = filterValue)
      : (this.dataSource.filter = '');

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  clearFilters() {
    this.valueTitle = null;
    this.valueClient = null;
    this.valueDate = null;
    this.dataSource.filter = '';
  }

  ngOnInit(): void {
    this.categoryService.getCategoriesLoans(this.route).subscribe((loans) => {
      loans.map((el) => (el.returnDate = el.returnDate.replace(' ', 'T')));
      loans.map((el) => (el.loanDate = el.loanDate.replace(' ', 'T')));
      this.dataSource.data = loans;
      this.dataSource.paginator = this.paginator;
      this.filterTable();
    });
  }

  filterTable() {
    this.dataSource.filterPredicate = (data, filter): boolean => {
      switch (this.typeOfFilter) {
        case 'nameGame':
          return data.nameGame.includes(filter);
        case 'nameClient':
          return data.nameClient.includes(filter);
        case 'loanDate':
          const loanDate = data.loanDate.substring(0, 10);
          const returnDate = data.returnDate.substring(0, 10);
          const startDateLoan = new Date(loanDate);
          const endDateLoan = new Date(returnDate);
          const inputFilter = new Date(filter);
          if (
            inputFilter.getTime() >= startDateLoan.getTime() &&
            inputFilter.getTime() <= endDateLoan.getTime()
          ) {
            return true;
          }
      }
    };
  }

  createCategory() {
    const dialogRef = this.dialog.open(LoansEditComponent, {
      data: {},
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  editCategory(loans: Loans) {
    const dialogRef = this.dialog.open(LoansEditComponent, {
      data: { loans: loans },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  deleteCategory(loans: Loans) {
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
          .deleteCategory(this.route, loans.id)
          .subscribe((result) => {
            this.ngOnInit();
          });
      }
    });
  }
}
