import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { SchemaService } from './schema.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('break-time-web');

  constructor(private schemaService: SchemaService) {}

  ngOnInit() {
    this.schemaService.addLocalBusinessSchema();
  }
}
