import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  texto = 'Party';
    urlImage = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg';

    constructor() {    
  }

  cambiarImagen(texto){
    if(this.texto === 'Party'){
      this.urlImage = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg';
    }
    else{
      this.urlImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    }
  }

  cambiarTexto(texto) {
   //console.log("entró", texto);
    if(texto === 'Party') {
      texto = 'cualquier cosa';
    } 
    else{
      texto = 'Party'
    }
    cambiarImagen(texto);
  }
}
  


