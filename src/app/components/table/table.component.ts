import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';
import { ContentService,Content } from "../../services/content.service";
import { ExcelService } from './../../services/excel.service';
import { CsvService } from './../../services/csv.service';
//import 'jspdf-autotable';
//import * as jsPDF from 'jspdf';
import { PdfService } from './../../services/pdf.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  contents:Content[] = [];
  filter:string;
  option:number;
  public config:PaginationInstance;
  entradas:number[] = [10,25,50,100];

  constructor(private router:Router,
            private _contentService:ContentService,
            private _excelService:ExcelService,
            private _csvService:CsvService,
            private _pdfService:PdfService,) {
    this.option = 10; 
    this.filter = '';
    this.contents = this._contentService.getContent();
    this.config = {
      itemsPerPage:this.option,
      currentPage:1
    }

  }

  ngOnInit() {
    
  }

  navigate(){
    this.router.navigateByUrl('login');
  }

  toArray(content:Content[]){
    let x = [];
    for(let i in content){
      x.push([content[i].rendering,content[i].browser,content[i].platform,content[i].engine,content[i].css]);
    }
    return x;
  }

  copyTable(){
    console.log('copy');
    
    let vector = this.toArray(this.contents);
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = vector.join();
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    
  }  

  saveExcel(){
    this._excelService.exportAsExcelFile(this.contents,'ExampleFile');
  }
  
  saveAsCSV(){
    this._csvService.downloadFile(this.contents);
  }

  saveAsPDF(){
    this._pdfService.downloadPDF(this.contents);
  }

  print(){
    window.open('./print','_blank');
  }

}
