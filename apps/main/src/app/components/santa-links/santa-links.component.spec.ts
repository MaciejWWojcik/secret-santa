import { ComponentFixture, fakeAsync, TestBed } from "@angular/core/testing";

import { SantaLinksComponent } from "./santa-links.component";
import { createSpyFromClass } from "jest-auto-spies";
import { SantaGeneratorStore } from "../../pages/santa-generator/santa-generator.component.store";
import { fireEvent, render, screen } from "@testing-library/angular";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from "@angular/material/divider";
import { CdkCopyToClipboard, Clipboard, ClipboardModule } from "@angular/cdk/clipboard";
import { EncoderService } from "../../services/encoder.service";
import { SantaManagerService } from "../../services/santa-manager.service";
import { MatDialogModule } from "@angular/material/dialog";

describe("SantaLinksComponent", () => {
  async function setup() {
    const clipboard = createSpyFromClass(Clipboard);
    const snackbar = createSpyFromClass(MatSnackBar);
    const encoder = createSpyFromClass(EncoderService);
    const manager = createSpyFromClass(SantaManagerService);
    const store = new SantaGeneratorStore(encoder, manager);

    encoder.encode.mockImplementation(v => `mockEncode[${v}]`);
    manager.generate.mockImplementation(names => new Map([
      ["Fake Name A", "Fake Name B"],
      ["Fake Name B", "Fake Name A"]
    ]));
    store.setNames(["Fake Name A", "Fake Name B"]);

    const { fixture } = await render(SantaLinksComponent, {
      imports: [
        MatListModule,
        MatDividerModule,
        ClipboardModule,
        MatDialogModule
      ],
      providers: [
        { provide: SantaGeneratorStore, useValue: store },
        { provide: MatSnackBar, useValue: snackbar },
        { provide: Clipboard, useValue: clipboard }
      ]
    });

    return {
      fixture,
      store,
      snackbar,
      clipboard
    };
  }

  it("display links", (async () => {
    await setup();

    expect(screen.getByText("Fake Name A")).toBeInTheDocument();
    expect(screen.getByText("Fake Name B")).toBeInTheDocument();
  }));

  it("copies the link and disabled the button", (async () => {
    const { clipboard } = await setup();

    const copyButtons = screen.getAllByText("Kopiuj link");
    fireEvent.click(copyButtons[0]);

    expect(clipboard.copy).toHaveBeenCalled();
    expect(copyButtons[0]).toBeDisabled();
    expect(copyButtons[1]).not.toBeDisabled();

    fireEvent.click(copyButtons[1]);

    expect(clipboard.copy).toHaveBeenCalled();
    expect(copyButtons[0]).toBeDisabled();
    expect(copyButtons[1]).toBeDisabled();
  }));

});
