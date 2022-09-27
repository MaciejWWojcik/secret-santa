import { Component } from "@angular/core";
import { SantaRevelerStore } from "./santa-reveler.component.store";

@Component({
  selector: "secret-santa-santa-reveler",
  templateUrl: "./santa-reveler.component.html",
  styleUrls: ["./santa-reveler.component.scss"],
  providers: [SantaRevelerStore]
})
export class SantaRevelerComponent {

  reveal = false;
  readonly person$ = this.store.secret$;

  constructor(
    private readonly store: SantaRevelerStore
  ) {
  }
}
