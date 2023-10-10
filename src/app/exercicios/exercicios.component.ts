import { Component } from '@angular/core';

@Component({
  selector: 'appexercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.css']
})
export class ExerciciosComponent {
  texto = 'Hello World!';
  
  link = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  className = 'exemplo';
  cor = 'black';
  corFundo = 'white';

  mudaCor(){
    if(this.cor == 'red'){
      this.cor='black'
      this.corFundo='white'
    }else{
      this.cor='red'
      this.corFundo='black'
    }
  }
  fontFamily=''
  setFontFamily(value:string){
    this.fontFamily=value
  }
}
