import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DogsListCardComponent } from './dogs-list-card.component';
import { DogsService } from './dogs.service';

@Component({
  selector: 'app-dogs-list',
  standalone: true,
  imports: [
    CommonModule, // enable the component can use ngIf, ngFor and other control flow directives
    DogsListCardComponent, // import a standalone component makes it available in the template
    // and can be referenced in the template by its selector
  ],
  template: `
    <section class="hero-section">
      <h2 class="hero-text">Discover Pets to walk near you</h2>
    </section>
    <article class="pet-list">
      <app-dogs-list-card
        *ngFor="let dog of dogsService.dogs; let i = index"
        [index]="i"
        [dog]="dog"
      ></app-dogs-list-card>
    </article>
  `,
  styles: [
    `
      .pet-list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding: 10px;
      }

      .hero-text {
        font-size: 25pt;
        padding: 10px;
      }
    `,
  ],
})
export class DogsListComponent {
  constructor(readonly dogsService: DogsService) {}
}
