import { Customer } from '../customer.model';
export interface Bill extends Customer{
    BillId: number,
    BillGenDate: Date,
    customerId: number,
    PerUnitCost: number,
    customerName: string,
    TotalUnits: number,
    BillAmount: Date
}