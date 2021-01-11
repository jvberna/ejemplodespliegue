import { Component, OnInit } from '@angular/core';
import { LlamadaService } from './llamada.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prueba';

  constructor( private llamada: LlamadaService ) {

  }

  ngOnInit(): void {
    console.log('llamada');
    this.llamada.miLlamada()
    .subscribe(res => {
      console.log('Llamada devuelve:')
      console.log(res);
    }, error => {
      console.log('Llamada error:')
      console.log(error);
    })
  }

}
