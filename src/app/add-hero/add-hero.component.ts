import { Component, Output, EventEmitter } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { hero } from '../types/types';

@Component({
  selector: 'app-add-hero',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="container">
      <div class="row justify-content-center">
        <form
          class="col-md-8 col-lg-6"
          [formGroup]="heroForm"
          (submit)="handleSubmit()"
        >
          <fieldset class="bg-secondary text-white p-3">
            <legend>Add your hero</legend>
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                formControlName="name"
                placeholder="Hulk, Storm, Thor..."
                autocomplete="name"
              />
            </div>
            <div
              class="alert alert-danger"
              [hidden]="name.valid || name.untouched"
            >
              Hero name is required
            </div>
            <div class="mb-3">
              <label for="real_name" class="form-label">Real Identity</label>
              <input
                type="text"
                class="form-control"
                id="real_name"
                formControlName="real_name"
                placeholder="Bruce Banner, Diana Prince..."
                autocomplete="additional-name"
              />
            </div>
            <div
              class="alert alert-danger"
              [hidden]="real_name.valid || real_name.untouched"
            >
              Real identity is required
            </div>
            <div class="mb-3">
              <label for="place_of_birth" class="form-label"
                >Place of Birth</label
              >
              <input
                type="text"
                class="form-control"
                id="place_of_birth"
                formControlName="place_of_birth"
                placeholder="Chicago, Illinois..."
                autocomplete="address-level1"
              />
            </div>
            <div
              class="alert alert-danger"
              [hidden]="place_of_birth.valid || place_of_birth.untouched"
            >
              Real identity is required
            </div>
            <div class="col-12 text-end">
              <button
                type="submit"
                class="btn btn-outline-warning my-2"
                [disabled]="heroForm.invalid"
              >
                Confirm
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  `,
  styleUrl: './add-hero.component.css',
})
export class AddHeroComponent {
  @Output() heroAdded = new EventEmitter<hero>();
  heroForm = new FormGroup({
    name: new FormControl('', Validators.required),
    real_name: new FormControl('', Validators.required),
    place_of_birth: new FormControl('', Validators.required),
  });

  //getters
  get name() {
    return this.heroForm.get('name') as FormControl;
  }
  get real_name() {
    return this.heroForm.get('real_name') as FormControl;
  }
  get place_of_birth() {
    return this.heroForm.get('place_of_birth') as FormControl;
  }

  handleSubmit() {
    if (this.heroForm.invalid) return;
    const newHero = {
      name: this.name.value,
      real_name: this.real_name.value,
      place_of_birth: this.place_of_birth.value,
    };
    this.heroAdded.emit(newHero);
  }
}
