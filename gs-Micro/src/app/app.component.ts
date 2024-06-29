import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from "./formulario/formulario.component";
import { AppModule } from './app.module';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FormularioComponent, AppModule]
})
  export class AppComponent {

}
