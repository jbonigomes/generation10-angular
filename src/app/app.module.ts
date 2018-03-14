import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CdkTableModule } from '@angular/cdk/table';

import { MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatChipsModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatRippleModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatSliderModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material';
import { MatDividerModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatStepperModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    CdkTableModule,

    MatCardModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSortModule,
    MatTabsModule,
    MatInputModule,
    MatChipsModule,
    MatRadioModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatRippleModule,
    MatSelectModule,
    MatSliderModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDividerModule,
    MatSidenavModule,
    MatStepperModule,
    MatGridListModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
