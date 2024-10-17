import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'; // Import du Router

@Component({
  selector: 'app-compte-formulaire',
  templateUrl: './compte-formulaire.component.html',
  styleUrls: ['./compte-formulaire.component.css']
})
export class CompteFormulaireComponent {
  compteForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.compteForm = this.fb.group({
      civilite: [''],
      nom: [''],
      prenom: [''],
      adresse: [''],
      cp: [''],
      ville: [''],
      pays: [''],
      tel: [''],
      email: [''],
      login: [''],
      password: ['']
    });
  }

  onSubmit() {
    const formData = this.compteForm.value;
    // utilisation du localstorage pour faire simple
    localStorage.setItem('formData', JSON.stringify(formData));
    this.router.navigate(['/recapitulatif']); 
  }
}
