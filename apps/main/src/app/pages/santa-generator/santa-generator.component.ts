import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { SantaGeneratorStore } from "./santa-generator.component.store";
import { AbstractControl, FormArray, FormControl, FormGroup } from "@angular/forms";
import { filter, map, tap } from "rxjs/operators";
import { MatDialog } from "@angular/material/dialog";
import { SantaLinksComponent } from "../../components/santa-links/santa-links.component";

export const notEmpty = () => {
  return (c: AbstractControl) => {
    if (c.value.some((v: string) => v.length > 0)) {
      return null;
    }
    return { empty: true };
  };
};

@Component({
  selector: "secret-santa-santa-generator",
  templateUrl: "./santa-generator.component.html",
  styleUrls: ["./santa-generator.component.scss"],
  providers: [SantaGeneratorStore]
})
export class SantaGeneratorComponent implements OnInit {

  readonly form = new FormGroup({
    names: new FormArray<FormControl<string>>([
      new FormControl<string>("", { nonNullable: true }),
      new FormControl<string>("", { nonNullable: true })
    ], notEmpty())
  });

  constructor(
    private readonly store: SantaGeneratorStore,
    private readonly dialog: MatDialog,
    private readonly viewContainerRef: ViewContainerRef
  ) {
  }

  ngOnInit() {
    this.form.valueChanges.pipe(
      map(formValue => formValue.names ?? []),
      filter(values => values[values.length - 1].length !== 0),
      tap(() => this.form.controls.names.push(new FormControl<string>("", { nonNullable: true })))
    ).subscribe();
  }

  generate() {
    this.store.setNames(this.form.controls.names.value);
    this.dialog.open(SantaLinksComponent, {
      viewContainerRef: this.viewContainerRef,
      disableClose: true
    });
    this.form.reset();
  }
}
