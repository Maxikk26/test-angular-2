import { Injectable } from '@angular/core';
import { Content } from './content.service';
import 'jspdf-autotable';
import * as jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

  downloadPDF(content:Content[]){
    let doc = new jsPDF();
    let col = ["Rendering Engine","Browser","Platform(s)","Engine Version","CSS Grade"];
    let rows = [];
    for(let i in content){
      let temp = [content[i].rendering,content[i].browser,content[i].platform,content[i].engine,content[i].css];
      rows.push(temp);
    }
    doc.autoTable(col,rows);
    doc.save('ExampleFile.pdf');
  }
}
