import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { EncoderService } from "../../services/encoder.service";
import { ActivatedRoute } from "@angular/router";
import { filter, map, tap } from "rxjs/operators";

export interface SantaRevelerState {
  secretPerson: string | null;
}

@Injectable()
export class SantaRevelerStore extends ComponentStore<SantaRevelerState> {

  constructor(
    private readonly encoder: EncoderService,
    private readonly route: ActivatedRoute
  ) {
    super({ secretPerson: null });

    this.route.paramMap.pipe(
      map(params => params.get("person")),
      tap(person => this.setState({ secretPerson: this.encoder.decode(person as string) }))
    ).subscribe();
  }

  readonly secret$ = this.select(state => state.secretPerson).pipe(filter(Boolean));
}
