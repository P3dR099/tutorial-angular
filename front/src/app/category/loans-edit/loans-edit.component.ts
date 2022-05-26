import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from '../category.service';
import { Loans } from '../model/Loans';
import { Router, NavigationEnd } from '@angular/router';
import { getRoutes } from '../../config/app.configs';

@Component({
  selector: 'app-loans-edit',
  templateUrl: './loans-edit.component.html',
  styleUrls: ['./loans-edit.component.scss'],
})
export class LoansEditComponent implements OnInit {
  loans: Loans;
  route: String = getRoutes(this.router);
  list: Loans[];
  nameGame;
  nameClient;
  loanDate;
  returnDate;

  constructor(
    public dialogRef: MatDialogRef<LoansEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.data.loans != null) {
      this.loans = Object.assign({}, this.data.loans);
    } else {
      this.loans = new Loans();
    }
    this.getList();
  }

  handleNameGame(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.nameGame = filterValue;
  }

  handleNameClient(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.nameClient = filterValue;
  }

  handleLoanDate(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.loanDate = new Date(filterValue);
  }

  handleReturnDate(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.returnDate = new Date(filterValue);
  }

  getList() {
    this.categoryService.getCategoriesLoans(this.route).subscribe((loans) => {
      this.list = loans;
    });
  }

  onSave() {
    let isSameGame: boolean;
    let isSameClient: boolean;

    this.list.map((el) => {
      const returnDate = new Date(el.returnDate.substring(0, 10));
      returnDate.setDate(returnDate.getDate() + 1);
      if (
        el.nameGame === this.nameGame &&
        returnDate >= this.loanDate.getTime()
      ) {
        isSameGame = true;
      }
      if (
        el.nameClient === this.nameClient &&
        returnDate >= this.loanDate.getTime()
      ) {
        isSameClient = true;
      }
    });

    if (isSameClient) {
      window.alert('Este cliente ya tiene un juego asignado para estas fechas');
      return;
    }

    if (isSameGame) {
      window.alert('Este juego está escogido para estas fechas');
      return;
    }
    if (this.loanDate.getTime() - this.returnDate.getTime() < -1123204000) {
      window.alert('La fecha de devolución debe se menor a 14');
      return;
    } else {
      this.categoryService
        .saveCategoryLoans(this.route, this.loans)
        .subscribe((result) => {
          this.dialogRef.close();
        });
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}
