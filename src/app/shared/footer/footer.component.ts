import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {
  public cookie: boolean = false;
  
  constructor() { }
  
  ngOnInit(): void {  

    // COOKIES
    let cokies = localStorage.getItem('cookies');

    if (!cokies) {
      this.cookie = false;
    }else{
      this.cookie = true;
    }

    // PARALLAX FOOTER
    let footer:any = document.querySelector('footer');
    document.querySelector('.contenido')?.setAttribute('style', `margin-bottom:${footer.offsetHeight}px; position: relative; z-index: 2; background: #fff;`);
    
  }
  
  /**=======================================================================
  * AÑO
  ======================================================================== */
  public año: any;
  public get year() : Date {
    return this.año = new Date();
  }

  /**=======================================================================
  * BTN UP TOP
  ======================================================================== */
  upTop(){
    let scrollToTop = window.setInterval(() => {

      let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 50); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }

        console.log('position: ', pos);        

    }, 15);
    
  }
  /**=======================================================================
  * ACCEPT COOKIES
  ======================================================================== */
  acceptCokies(){
    localStorage.setItem('cookies', 'true');
    this.cookie = true;
  }
  
  // FIN DE LA CLASE
}
