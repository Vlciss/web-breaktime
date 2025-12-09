import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule, NgFor],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
