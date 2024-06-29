import {
  Component
} from '@angular/core';
import {
  OceanApiService
} from '../api/ocean_api.service';
import {
  CommonModule
} from '@angular/common';
import {
  FormsModule
} from '@angular/forms';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {


  public opcoes: string[] = [
    "Atlântico Norte",
    "Atlântico Sul",
    "Pacífico Norte",
    "Pacífico Sul",
    "Índico",
    "Ártico",
    "Antártico",
  ];


  public species: any[] = [
    "Baleia-azul",
    "Tubarão-branco",
    "Peixe-palhaço",
    "Tartaruga-verde",
    "Coral"

  ];

  public conservationStatus: any[] = [
    "Ameaçada",

    "Vulnerável",


    "Menos preocupante",


    "Criticamente ameaçado"

  ];

  public poluicao: any[] = [
    "Baixo",

    "Moderado",

    "Alto",

  ];

  temperatura: any;
  ph: any;
  opcoesForm: any;
  speciesForm: any;
  conservationStatusForm: any;
  temperaturaForm: any;
  phForm: any;
  poluicaoForm: any;

  public retorno: any;

  constructor(private OceanApiService: OceanApiService) {}


  ngOnInit(): void {}


  onSubmit() {

   this.OceanApiService.getOceanData(
    this.opcoesForm,
    this.speciesForm,
    this.conservationStatusForm,
    this.temperaturaForm,
    this.phForm,
    this.poluicaoForm
   ).subscribe((data)=>{
    this.retorno = data;
    console.log(data);
    
   })
  }

}
