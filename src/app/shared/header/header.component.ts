import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  constructor(  private router: Router) {

    this.router.events
        .pipe(
          filter( event => event instanceof ActivationEnd ),
          filter( (event: any) => event.snapshot.firstChild === null  ),
          map( (event: any) => event.snapshot.data )
        )
        .subscribe( data => {

          document.title = `${data.titulo} - Blessed Refuge Foundation`;
        
        });              
  
      
  }

}
