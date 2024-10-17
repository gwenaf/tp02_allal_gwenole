import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteFormulaireComponent } from './compte-formulaire/compte-formulaire.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';

const routes: Routes = [
    { path: '', component: CompteFormulaireComponent },
    { path: 'recapitulatif', component: RecapitulatifComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
