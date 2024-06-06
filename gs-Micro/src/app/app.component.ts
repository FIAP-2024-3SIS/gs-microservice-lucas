import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface DataItem {
  region: string;
  species: string;
  conservationStatus: string;
  waterTemperature: string;
  pH: string;
  pollutionLevels: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  region: string = ''; // Declare and initialize the region property
  species: string = '';
  conservationStatus: string = '';
  waterTemperature: string = '';
  pH: string = '';
  pollutionLevels: string = '';

  data: DataItem[] = [
    // Aqui você coloca sua lista de dados
    { region: 'SP', species: 'Peixe', conservationStatus: 'Em perigo', waterTemperature: '20°C', pH: '7', pollutionLevels: 'Alto' },
    { region: 'RJ', species: 'Tartaruga', conservationStatus: 'Em perigo', waterTemperature: '25°C', pH: '8', pollutionLevels: 'Médio' },
    { region: 'SP', species: 'Peixe', conservationStatus: 'Em perigo', waterTemperature: '20°C', pH: '7', pollutionLevels: 'Alto' },
    //...
  ];

  filteredData: DataItem[] = this.data;

  onSubmit() {
    this.filteredData = this.data.filter(item => {
      return (
        (this.region === '' || item.region === this.region) &&
        (this.species === '' || item.species === this.species) &&
        (this.conservationStatus === '' || item.conservationStatus === this.conservationStatus) &&
        (this.waterTemperature === '' || item.waterTemperature === this.waterTemperature) &&
        (this.pH === '' || item.pH === this.pH) &&
        (this.pollutionLevels === '' || item.pollutionLevels === this.pollutionLevels)
      );
    });
  }
}
