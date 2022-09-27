import { EncoderService } from "../../services/encoder.service";
import { ComponentStore } from "@ngrx/component-store";
import { Injectable } from "@angular/core";
import { SantaManagerService } from "../../services/santa-manager.service";
import { environment } from "../../../environments/environment";

export interface GeneratorState {
  links: { name: string, link: string }[];
}

@Injectable()
export class SantaGeneratorStore extends ComponentStore<GeneratorState> {

  constructor(
    private readonly encoder: EncoderService,
    private readonly manager: SantaManagerService
  ) {
    super({ links: [] });
  }

  readonly links$ = this.select(state => state.links);

  readonly setNames = this.updater((state, names: string[]) => {
    const santas = this.manager.generate(names.filter(name => name.length));

    return ({
      links: [...santas.entries()]
        .map(([santa, assignee]) => ({
          name: santa,
          link: `${environment.host}/#/for/${this.encoder.encode(assignee)}`
        }))
    });
  });

}
