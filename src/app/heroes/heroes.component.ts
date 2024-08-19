import { Component, Input } from '@angular/core';
import { hero } from '../types/types';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <table class="table table-secondary table-striped">
        <caption>
          Super Heroes of the world 2024
        </caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Real Identity</th>
            <th scope="col">Place of birth</th>
          </tr>
        </thead>
        <tbody>
          @for(hero of heroes; track hero.id; let i = $index){
          <tr>
            <td>{{ i + 1 }}</td>
            <td>{{ hero.name }}</td>
            <td>{{ hero.real_name }}</td>
            <td>{{ hero.place_of_birth }}</td>
          </tr>
          }
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4">Heroes count: {{ heroes?.length }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  `,
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  @Input() heroes: hero[] | null = [];
}
