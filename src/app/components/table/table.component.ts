import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor() { }

  ngOnInit() {
  }

}
