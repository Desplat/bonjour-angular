import { Routes } from '@angular/router';
import { AccueilComponentComponent } from './accueil-component/accueil-component.component';
import { NouveauCollegueTemplateFormComponent } from './nouveau-collegue-template-form/nouveau-collegue-template-form.component';

export const ROUTES: Routes = [
    { path: 'accueil', component: AccueilComponentComponent },
    { path: 'form', component: NouveauCollegueTemplateFormComponent }
];