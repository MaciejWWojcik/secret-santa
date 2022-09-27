import { Component } from "@angular/core";
import { SantaGeneratorStore } from "../../pages/santa-generator/santa-generator.component.store";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatButton } from "@angular/material/button";

@Component({
  selector: "secret-santa-santa-links",
  templateUrl: "./santa-links.component.html",
  styleUrls: ["./santa-links.component.scss"]
})
export class SantaLinksComponent {

  readonly links$ = this.store.links$;

  constructor(
    private readonly store: SantaGeneratorStore,
    private readonly snackbar: MatSnackBar
  ) {
  }

  copied(name: string, button: MatButton): void {
    this.snackbar.open(`Link dla ${name} został skopiowany`);
    button.disabled = true;
  }
}
