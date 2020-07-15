import {NgModule} from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [WelcomeComponent],
    imports: [MatDialogModule],
    entryComponents: [
        WelcomeComponent, MatButtonModule
      ],
      providers: [
        {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
      ]
})

export class WelcomeModule{}