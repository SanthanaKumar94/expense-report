import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ValidateExpense } from '../validate-expense';

interface MonthlyExpense {
  month: string;
  totalIncome: number;
  totalExpense: number;
  netSavings: number;
  isEditing?: boolean;
}

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, ValidateExpense],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  protected monthlyExpenses: MonthlyExpense[] = [
    { month: 'January', totalIncome: 18000, totalExpense: 12000, netSavings: 6000 },
    { month: 'February', totalIncome: 15000, totalExpense: 10000, netSavings: 5000 },
    { month: 'March', totalIncome: 20000, totalExpense: 13000, netSavings: 7000 },
    { month: 'April', totalIncome: 17000, totalExpense: 11000, netSavings: 6000 },
    { month: 'May', totalIncome: 22000, totalExpense: 14000, netSavings: 8000 },
    { month: 'June', totalIncome: 19000, totalExpense: 12000, netSavings: 7000 },
    { month: 'July', totalIncome: 21000, totalExpense: 15000, netSavings: 6000 },
    { month: 'August', totalIncome: 23000, totalExpense: 16000, netSavings: 7000 },
    { month: 'September', totalIncome: 16000, totalExpense: 10000, netSavings: 6000 },
    { month: 'October', totalIncome: 18000, totalExpense: 12000, netSavings: 6000 },
    { month: 'November', totalIncome: 20000, totalExpense: 13000, netSavings: 7000 },
    { month: 'December', totalIncome: 25000, totalExpense: 18000, netSavings: 7000 }
  ];
  
  protected get yearlySavings(): number {
    return this.monthlyExpenses.reduce((total, month) => total + month.netSavings, 0);
  }
  
  protected editExpense(index: number): void {
    this.monthlyExpenses[index].isEditing = true;
  }
  
  protected updateExpense(index: number): void {
    const expense = this.monthlyExpenses[index];
    expense.netSavings = expense.totalIncome - expense.totalExpense;
    expense.isEditing = false;
  }
}
