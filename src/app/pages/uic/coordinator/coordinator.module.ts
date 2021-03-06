// Angular Modules
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

// PrimeNG Modules
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {SkeletonModule} from 'primeng/skeleton';



// My Components
import {TooltipModule} from 'primeng/tooltip';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {FileUploadModule} from 'primeng/fileupload';
import {TableModule} from 'primeng/table';
import {RatingModule} from 'primeng/rating';
import {DialogModule} from 'primeng/dialog';
import {InputNumberModule} from 'primeng/inputnumber';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {PaginatorModule} from 'primeng/paginator';
import {KeyFilterModule} from 'primeng/keyfilter';
import {TabViewModule} from 'primeng/tabview';
import {TreeModule} from 'primeng/tree';
import {AccordionModule} from 'primeng/accordion';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {CardModule} from 'primeng/card';
import {SharedModule} from '../../shared/shared.module';
import {RippleModule} from 'primeng/ripple';
import {CalendarModule} from 'primeng/calendar';

import {RadioButtonModule} from 'primeng/radiobutton';
import { CoordinatorRouting } from './coordinator.routing';
import { CoordinatorComponent } from './coordinator.component';
import { ConvocatoryComponent } from './convocatory/convocatory.component';
import { ConvocatoryFormComponent } from './convocatory/convocatory-form/convocatory-form.component';
import { ConvocatoryListComponent } from './convocatory/convocatory-list/convocatory-list.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { RequirementsListComponent } from './requirements/requirements-list/requirements-list.component';
import { RequirementsFormComponent } from './requirements/requirements-form/requirements-form.component';
import { EventComponent } from './event/event.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventFormComponent } from './event/event-form/event-form.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CoordinatorRouting),
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    DropdownModule,
    TooltipModule,
    AutoCompleteModule,
    ToastModule,
    ToolbarModule,
    FileUploadModule,
    TableModule,
    RatingModule,
    DialogModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    TooltipModule,
    DropdownModule,
    PaginatorModule,
    KeyFilterModule,
    TabViewModule,
    TreeModule,
    AccordionModule,
    OverlayPanelModule,
    SharedModule,
    CardModule,
    SkeletonModule,
    RippleModule,
    CalendarModule,
    RadioButtonModule,
    
  ],
  declarations: [
    ConvocatoryFormComponent,
    RequirementsFormComponent,
    CoordinatorComponent,
    ConvocatoryComponent,
    ConvocatoryListComponent,
    RequirementsComponent,
    RequirementsListComponent,
    EventComponent,
    EventListComponent,
    EventFormComponent
  ],
})
export class CoordinatorModule { }
