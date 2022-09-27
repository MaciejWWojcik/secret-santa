import { AppComponent } from "./app.component";
import { render, screen } from "@testing-library/angular";
import { fakeAsync } from "@angular/core/testing";
import { MatToolbarModule } from "@angular/material/toolbar";

describe("AppComponent", () => {
  async function setup() {
    const { fixture } = await render(AppComponent, {
      imports: [MatToolbarModule]
    });

    return { fixture };
  }

  it("displays the toolbar", fakeAsync(async () => {
    await setup();

    expect(screen.getByText("Sekretny Mikołaj")).toBeInTheDocument();
  }));

});
