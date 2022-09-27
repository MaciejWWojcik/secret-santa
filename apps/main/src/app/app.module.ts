import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { SantaGeneratorComponent } from "./pages/santa-generator/santa-generator.component";
import { SantaRevelerComponent } from "./pages/santa-revealer/santa-reveler.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { SantaLinksComponent } from "./components/santa-links/santa-links.component";
import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from "@angular/material/divider";
import { ClipboardModule } from "@angular/cdk/clipboard";
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from "@angular/material/snack-bar";

const material = [
  MatButtonModule,
  MatFormFieldModule,
  MatDialogModule,
  MatToolbarModule,
  MatInputModule,
  MatListModule,
  MatDividerModule,
  ClipboardModule,
  MatSnackBarModule
];

const routes: Routes = [
  { path: "", component: SantaGeneratorComponent },
  { path: "for/:person", component: SantaRevelerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SantaGeneratorComponent,
    SantaRevelerComponent,
    SantaLinksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ...material
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 4000 } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
