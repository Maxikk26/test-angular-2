import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


//Routes
import { APP_ROUTING } from './app.routes';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TableComponent } from './components/table/table.component';
import { FilterPipe } from './pipes/filter.pipe';

//Services
import { ContentService } from './services/content.service';
import { CsvService } from './services/csv.service';
import { PdfService } from './services/pdf.service';
import { ExcelService } from './services/excel.service';
import { ShowService } from './services/show.service';
import { PrintComponent } from './components/print/print.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    TableComponent,
    FilterPipe,
    PrintComponent
  ],
  imports: [
  
 BrowserModule,
    APP_ROUTING,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    ContentService,
    CsvService,
    PdfService,
    ExcelService,
    ShowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
