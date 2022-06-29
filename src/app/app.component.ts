import { Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {FormControl} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { AgGridAngular } from "ag-grid-angular";
import { CellComp } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'ScreenDesign';
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  showFiller = false;
  selected = 'option2';

  @ViewChild('agGrid') agGrid!: AgGridAngular;

  onDeleteRow()
   {
  var selectedData = this.agGrid.api.getSelectedRows();
  this.agGrid.api.updateRowData({ remove: selectedData });
   }

  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

  removeData(row: any): void {
    const index = this.rowData.indexOf(row, 0);
    if (index > -1) {
      this.rowData.splice(index, 1);
    }
    this.table.renderRows();
  }

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }



  columnDefs = [
    {headerName: "Delete", field: "Delete", checkboxSelection:true, width: 100 },
    {headerName: "#", field: "IdNumber",editable: true, width: 100},
    {headerName: "InvoiceNo", field: "InvoiceNo",sortable: true,  editable: true, resizable: true, filter: true, width: 130,},
    {headerName: "Coverage Description", field: "CovDescrip",sortable: true,  editable: true, resizable: true, filter: true, width: 185},
    {headerName: "Covered Amount", field: "CovAmount",sortable: true,  editable: true, resizable: true, filter: true, width: 160,cellStyle: {'text-align': 'right'} },
    {headerName: "Premium Rate", field: "PrimRate" ,sortable: true,  editable: true, resizable: true, filter: true, width: 140, headerClass: 'Amount', cellStyle: {'text-align': 'right'}},
    {headerName: "Premium Amount", field: "PrimAmount" ,sortable: true,  editable: true, resizable: true, filter: true, width: 165, headerClass: 'Amount', cellStyle: {'text-align': 'right'}},
    {headerName: "Commission Rate", field: "CommRate" ,sortable: true, editable: true, resizable: true, filter: true, width: 160, headerClass: 'Amount', cellStyle: {'text-align': 'right'}},
    {headerName: "Commission Amount", field: "CommAmount" ,sortable: true, editable: true, resizable: true, filter: true, width: 170, headerClass: 'Amount', cellStyle: {'text-align': 'right'}},
    {headerName: "CM Commission", field: "cmComm" ,sortable: true, editable: true, resizable: true, filter: true, width: 160, headerClass: 'Amount', cellStyle: {'text-align': 'right'}},
    {headerName: "Adjusted Commission", field: "AdjComm",sortable: true, editable: true, resizable: true, filter: true, width: 160, headerClass: 'Amount', cellStyle: {'text-align': 'right'}},
    {headerName: "Valid Commission", field: "ValComm",sortable: true, editable: true, resizable: true, filter: true, width: 160, headerClass: 'Amount', cellStyle: {'text-align': 'right'}},
    {headerName: "Adjustment", field: "Adjust",sortable: true, editable: true, resizable: true, filter: true, width: 160, headerClass: 'Amount', cellStyle: {'text-align': 'right'}},
  ];


  rowData = [
    {IdNumber: '#', InvoiceNo: '1000000001',CovDescrip: 'VTPL- Property Damage',CovAmount: '300,000.00',PrimRate: '0.3350000000%',PrimAmount: '1,962.33',CommRate: '25.00',CommAmount: '25.00',cmComm: '#####',AdjComm: '#####',ValComm: '#####', Adjust: '#####'},
    {IdNumber: '#', InvoiceNo: '1000000001',CovDescrip: 'VTPL-Bodily Injury',CovAmount: '300,000.00',PrimRate: '0.3350000000%',PrimAmount: '855.00',CommRate: '25.00',CommAmount: '25.00',cmComm: '#####',AdjComm: '#####',ValComm: '#####', Adjust: '#####'},
    {IdNumber: '#', InvoiceNo: '1000000001',CovDescrip: 'Auto Personal Accident',CovAmount: '500,000.00',PrimRate: '0.3350000000%',PrimAmount: '00.0',CommRate: '25.00',CommAmount: '25.00',cmComm: '#####',AdjComm: '#####',ValComm: '#####', Adjust: '#####'},
    {IdNumber: '#', InvoiceNo: '1000000001',CovDescrip: 'Own Damage/Theft',CovAmount: '124,000.00	',PrimRate: '0.3350000000%',PrimAmount: '1,436',CommRate: '25.00',CommAmount: '25.00',cmComm: '#####',AdjComm: '#####',ValComm: '#####', Adjust: '#####'},
    {IdNumber: '#', InvoiceNo: '1000000001',CovDescrip: 'VTPL- Property Damage',CovAmount: '124,000.00',PrimRate: '0.3350000000%',PrimAmount: '1,436',CommRate: '25.00',CommAmount: '25.00',cmComm: '#####',AdjComm: '#####',ValComm: '#####', Adjust: '#####'},

  ];

  displayedColumns: string[] = ['Delete','hastag', 'InvoiceNo', 'CovDescrip', 'CovAmount', 'PrimRate','PrimAmount', 'CommRate','CommAmount','cmComm', 'AdjComm','ValComm', 'Adjust'];
  displayedColumns1: string[] = ['invoiceno','CoveredAmmount', 'PremiumAmmount', 'GrossCommission', 'CommissionAdjust', 'NetGrossComm'];
  displayedColumns2: string[] = ['ban','PremiumAmount','TotalCharges', 'GrossAR', 'GrossUnIN', 'GrossComm', 'NetComm', 'OutputVat','GrossAP','Wtax','NextDue'];
  dataSource = ELEMENT_DATA;
  dataSource1 = ELEMENT_DATA2;
  dataSource2 = ELEMENT_DATA3;
}




export interface PeriodicElement {
  Delete: String;
  InvoiceNo: number;
  hastag: string;
  CovDescrip: string;
  CovAmount: string;
  PrimRate: string;
  PrimAmount:string;
  CommRate:String;
  CommAmount: string;
  cmComm:String;
  AdjComm:String;
  ValComm:string;
  Adjust:string;
}
export interface TotalCoverage{
  invoiceno: string;
  CoveredAmmount: string;
  PremiumAmmount: string;
  GrossCommission: string;
  CommissionAdjust: string;
  NetGrossComm: string;
}
export interface AdjustmentSumarry {
  ban:String;
  PremiumAmount: String;
  TotalCharges: String;
  GrossAR: string;
  GrossUnIN: string;
  GrossComm: string;
  NetComm: string;
  OutputVat:string;
  GrossAP:String;
  Wtax: string;
  NextDue:String;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Delete:'',hastag: '#', InvoiceNo: 1000000001, CovDescrip: 'VTPL- Property Damage', CovAmount: '300,000.00', PrimRate: '0.3350000000%',PrimAmount:'1,962.33',CommRate:'25.00',CommAmount:'25.00',cmComm:'',AdjComm:'',ValComm:'',Adjust:''},
  {Delete:'',hastag: '#', InvoiceNo: 1000000001, CovDescrip: 'VTPL-Bodily Injury', CovAmount: '300,000.00', PrimRate: '0.3350000000%',PrimAmount:'855.00',CommRate:'0.00',CommAmount:'25.00',cmComm:'',AdjComm:'',ValComm:'',Adjust:''},
  {Delete:'',hastag: '#', InvoiceNo: 1000000001, CovDescrip: 'Auto Personal Accident', CovAmount: '500,000.00', PrimRate: '0.3350000000%', PrimAmount:'00.0',CommRate:'0.00',CommAmount:'25.00',cmComm:'',AdjComm:'',ValComm:'',Adjust:''},
  {Delete:'',hastag: '#', InvoiceNo: 1000000001, CovDescrip: 'Own Damage/Theft', CovAmount: '124,000.00', PrimRate: '0.3350000000%', PrimAmount:'1,436',CommRate:'25.00',CommAmount:'25.00',cmComm:'',AdjComm:'',ValComm:'',Adjust:''},
  {Delete:'',hastag: '#', InvoiceNo: 1000000001, CovDescrip: 'VTPL- Property Damage', CovAmount: '124,000.00',PrimRate: '0.3350000000%', PrimAmount:'1,436',CommRate:'25.00',CommAmount:'25.00',cmComm:'',AdjComm:'',ValComm:'',Adjust:''},

];

const ELEMENT_DATA2: TotalCoverage[] = [
 {invoiceno:'1000000001',CoveredAmmount:'1,624,8888.00',PremiumAmmount:'4,253.54',GrossCommission:'1,063.39',CommissionAdjust:'...',NetGrossComm:'1,063.39'},
 {invoiceno:'1000033943',CoveredAmmount:'128,888.00',PremiumAmmount:'2,837.58',GrossCommission:'709.39',CommissionAdjust:'...',NetGrossComm:'709.39'}
];

const ELEMENT_DATA3: AdjustmentSumarry [] = [
  {ban:'Billing',PremiumAmount:'4,253.54',TotalCharges:'572.95',GrossAR:'4,253.54',GrossUnIN:'0.00',GrossComm:'1,063.39',NetComm:'1,063.39', OutputVat:'127.61', GrossAP:'3,635.49', Wtax:'159.51',NextDue:'3,795.00'},
  {ban:'Adjustment',PremiumAmount:'0.00',TotalCharges:'0.00',GrossAR:'0.00	',GrossUnIN:'0.00',GrossComm:'212.67',NetComm:'212.67', OutputVat:'25.52', GrossAP:'(238.19)', Wtax:'31.90',NextDue:'(206.29)'},
  {ban:'Net Balance',PremiumAmount:'4,253.54',TotalCharges:'572.95',GrossAR:'4,826.49',GrossUnIN:'0.00',GrossComm:'1,276.06',NetComm:'1,276.06', OutputVat:'153.13', GrossAP:'3,397.30', Wtax:'191.41',NextDue:'3,588.71'},
 ];
/**
 * @title Basic use of `<table mat-table>`
 */


