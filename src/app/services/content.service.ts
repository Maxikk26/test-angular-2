import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ContentService {

  constructor() { }

  getContent():Content[]{
    return this.contents;
  }

  private contents:Content[] =[
  {
     rendering:"Gecko"
    ,browser:"Seamonkey 1.1"
    ,platform:"Win 98+ / OSX.2+"
    ,engine:"1.8"
    ,css:"A"
  },
  {
     rendering:"Webkit"
    ,browser:"Safari 3.0"
    ,platform:"OSX.4+"
    ,engine:"522.1"
    ,css:"A"
  },
  {
     rendering:"Webkit"
    ,browser:"Safari 2.0"
    ,platform:"OSX.4+"
    ,engine:"419.3"
    ,css:"A"
  },
  {
     rendering:"Webkit"
    ,browser:"Safari 1.3"
    ,platform:"OSX.3"
    ,engine:"312.8"
    ,css:"A"
  },
  {
     rendering:"Webkit"
    ,browser:"Safari 1.2"
    ,platform:"OSX.3"
    ,engine:"125.5"
    ,css:"A"
  },
  {
     rendering:"Webkit"
    ,browser:"S60"
    ,platform:"S60"
    ,engine:"413"
    ,css:"A"
  },
  {
     rendering:"Misc"
    ,browser:"PSP browser"
    ,platform:"PSP"
    ,engine:"-"
    ,css:"C"
  },
  {
     rendering:"Presto"
    ,browser:"Opera for Wii"
    ,platform:"Wii"
    ,engine:"-"
    ,css:"A"
  },
  {
     rendering:"Presto"
    ,browser:"Opera 9.5"
    ,platform:"Win 88+ / OSX.3+"
    ,engine:"-"
    ,css:"A"
  },
  {
     rendering:"Presto"
    ,browser:"Opera 9.2"
    ,platform:"Win 88+ / OSX.3+"
    ,engine:"-"
    ,css:"A"
  },
  {
     rendering:"Presto"
    ,browser:"Opera 9.0"
    ,platform:"Win 95+ / OSX.3+"
    ,engine:"-"
    ,css:"A"
  },
  {
     rendering:"Presto"
    ,browser:"Opera 8.5"
    ,platform:"Win 95+ / OSX.2+"
    ,engine:"-"
    ,css:"A"
  },
  {
     rendering:"Presto"
    ,browser:"Opera 8.0"
    ,platform:"Win 95+ / OSX.2+"
    ,engine:"-"
    ,css:"A"
  },
  {
     rendering:"Presto"
    ,browser:"Opera 7.5"
    ,platform:"Win 95+ / OSX.2+"
    ,engine:"-"
    ,css:"A"
  },
  {
     rendering:"Presto"
    ,browser:"Opera 7.0"
    ,platform:"Win 95+ / OSX.1+"
    ,engine:"-"
    ,css:"A"
  },
  {
     rendering:"Webkit"
    ,browser:"OmniWeb 5.5"
    ,platform:"OSX.4+"
    ,engine:"420"
    ,css:"A"
  },
  {
     rendering:"Presto"
    ,browser:"Nokia N800"
    ,platform:"N800"
    ,engine:"-"
    ,css:"A"
  },
  {
     rendering:"Presto"
    ,browser:"Nintendo DS browser"
    ,platform:"Nintendo DS"
    ,engine:"8.5"
    ,css:"C/A1"
  },
  {
     rendering:"Gecko"
    ,browser:"Netscape Navigator 9"
    ,platform:"Win 98+ / OSX.2+"
    ,engine:"1.8"
    ,css:"A"
  },
  {
     rendering:"Gecko"
    ,browser:"Netscape browser 8"
    ,platform:"Win 98SE+"
    ,engine:"1.7"
    ,css:"A"
  },
  {
     rendering:"Gecko"
    ,browser:"Netscape 7.2"
    ,platform:"Win 95+ / Mac OS 8.6-9.2"
    ,engine:"1.7"
    ,css:"A"
  },
  {
     rendering:"Misc"
    ,browser:"NetFront 3.4"
    ,platform:"Embedded devices"
    ,engine:"-"
    ,css:"A"
  },
  {
     rendering:"Misc"
    ,browser:"NetFront 3.1"
    ,platform:"Embedded devices"
    ,engine:"-"
    ,css:"C"
  },
  {
     rendering:"Gecko"
    ,browser:"Mozilla 1.8"
    ,platform:"Win 98+ / OSX.1+"
    ,engine:"1.8"
    ,css:"A"
  },
  {
     rendering:"Gecko"
    ,browser:"Mozilla 1.7"
    ,platform:"Win 98+ / OSX.1+"
    ,engine:"1.7"
    ,css:"A"
  },
  {
     rendering:"Gecko"
    ,browser:"Mozilla 1.6"
    ,platform:"Win 95+ / OSX.1+"
    ,engine:"1.6"
    ,css:"A"
  },
  {
     rendering:"Gecko"
    ,browser:"Mozilla 1.5"
    ,platform:"Win 95+ / OSX.1+"
    ,engine:"1.5"
    ,css:"A"
  },
  {
     rendering:"Gecko"
    ,browser:"Mozilla 1.4"
    ,platform:"Win 95+ / OSX.1+"
    ,engine:"1.4"
    ,css:"A"
  },
  {
     rendering:"Gecko"
    ,browser:"Mozilla 1.3"
    ,platform:"Win 95+ / OSX.1+"
    ,engine:"1.3"
    ,css:"A"
  },
  {
     rendering:"Gecko"
    ,browser:"Mozilla 1.2"
    ,platform:"Win 95+ / OSX.1+"
    ,engine:"1.2"
    ,css:"A"
  },
  {
     rendering:"Gecko"
    ,browser:"Mozilla 1.1"
    ,platform:"Win 95+ / OSX.1+"
    ,engine:"1.1"
    ,css:"A"
  },
  {
     rendering:"Gecko"
    ,browser:"Mozilla 1.0"
    ,platform:"Win 95+ / OSX.1+"
    ,engine:"1"
    ,css:"A"
  },
  {
     rendering:"Misc"
    ,browser:"Lynx"
    ,platform:"Text only"
    ,engine:"-"
    ,css:"X"
  },
  {
     rendering:"Misc"
    ,browser:"Links"
    ,platform:"Text only"
    ,engine:"-"
    ,css:"X"
  },
  {
     rendering:"KHTML"
    ,browser:"Konqureror 3.5"
    ,platform:"KDE 3.5"
    ,engine:"3.5"
    ,css:"A"
  },
  {
     rendering:"KHTML"
    ,browser:"Konqureror 3.3"
    ,platform:"KDE 3.3"
    ,engine:"3.3"
    ,css:"A"
  },
  {
     rendering:"KHTML"
    ,browser:"Konqureror 3.1"
    ,platform:"KDE 3.1"
    ,engine:"3.1"
    ,css:"C"
  },
  {
     rendering:"Webkit"
    ,browser:"iPod Touch / iPhone"
    ,platform:"iPod"
    ,engine:"420.1"
    ,css:"A"
  },
  {
     rendering:"Trident"
    ,browser:"Internet Explorer 7"
    ,platform:"Win XP SP2+"
    ,engine:"7"
    ,css:"A"
  },
  {
     rendering:"Tasman"
    ,browser:"Internet Explorer 5.2"
    ,platform:"Mac OS 8-X"
    ,engine:"1"
    ,css:"C"
  },
  {
     rendering:"Tasman"
    ,browser:"Internet Explorer 5.1"
    ,platform:"Mac OS 7.6-9"
    ,engine:"1"
    ,css:"C"
  },
  {
     rendering:"Tasman"
    ,browser:"Internet Explorer 4.5"
    ,platform:"Mac OS 8-9"
    ,engine:"-"
    ,css:"X"
  },
  {
     rendering:"Trident"
    ,browser:"Internet Explorer 6"
    ,platform:"Win 98+"
    ,engine:"6"
    ,css:"A"
  },
  {
     rendering:"Trident"
    ,browser:"Internet Explorer 5.5"
    ,platform:"Win 95+"
    ,engine:"5.5"
    ,css:"A"
  },
  {
     rendering:"Trident"
    ,browser:"Internet Explorer 5.0"
    ,platform:"Win 95+"
    ,engine:"5"
    ,css:"C"
  },
  {
     rendering:"Trident"
    ,browser:"Internet Explorer 4.0"
    ,platform:"Win 95+"
    ,engine:"4"
    ,css:"X"
  },
  {
     rendering:"Misc"
    ,browser:"IE Mobile"
    ,platform:"Windows Mobile 6"
    ,engine:"-"
    ,css:"C"
  },
  {
     rendering:"Gecko"
    ,browser:"Firefox 3.0"
    ,platform:"Win 2k+ / OSX.3+"
    ,engine:"1.9"
    ,css:"A"
  },
  {
     rendering:"Gecko"
    ,browser:"Firefox 2.0"
    ,platform:"Win 98+ / OSX.2+"
    ,engine:"1.8"
    ,css:"A"
  },
  {
     rendering:"Gecko"
    ,browser:"Firefox 1.5"
    ,platform:"Win 98+ / OSX.2+"
    ,engine:"1.8"
    ,css:"A"
  },
  {
     rendering:"Gecko"
    ,browser:"Firefox 1.0"
    ,platform:"Win 98+ / OSX.2+"
    ,engine:"1.7"
    ,css:"A"
  },
  {
     rendering:"Gecko"
    ,browser:"Epiphany 2.20"
    ,platform:"Gnome"
    ,engine:"1.8"
    ,css:"A"
  },
  {
     rendering:"Misc"
    ,browser:"Dillo 0.8"
    ,platform:"Embedded devices"
    ,engine:"-"
    ,css:"X"
  },
  {
     rendering:"Gecko"
    ,browser:"Camino 1.5"
    ,platform:"OSX.3+"
    ,engine:"1.8"
    ,css:"A"
  },
  {
     rendering:"Gecko"
    ,browser:"Camino 1.0"
    ,platform:"OSX.2+"
    ,engine:"1.8"
    ,css:"A"
  },
  {
     rendering:"Trident"
    ,browser:"AOL browser (AOL desktop)"
    ,platform:"Win XP"
    ,engine:"6"
    ,css:"A"
  },
  {
     rendering:"Other browsers"
    ,browser:"All others"
    ,platform:"-"
    ,engine:"-"
    ,css:"U"
  }]

}

export interface Content{
    rendering:string,
    browser:string,
    platform:string,
    engine:string,
    css:string
}
