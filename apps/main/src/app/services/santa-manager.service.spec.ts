import { SantaManagerService } from "./santa-manager.service";

describe("SantaManagerService", () => {
  function setup() {
    return {
      service: new SantaManagerService()
    };
  }

  it("resolves 3 people", () => {
    const { service } = setup();

    const map = service.generate([
      "A", "B", "C"
    ]);

    const givePresent = new Set();
    const gotPresent = new Set();

    for (const [a, b] of map) {
      givePresent.add(a);
      gotPresent.add(b);

      expect(a).not.toEqual(b);
    }

    expect(givePresent.size).toEqual(3);
    expect(gotPresent.size).toEqual(3);
  });
  it("resolves 4 people", () => {
    const { service } = setup();

    const map = service.generate([
      "A", "B", "C", "D"
    ]);

    const givePresent = new Set();
    const gotPresent = new Set();

    for (const [a, b] of map) {
      givePresent.add(a);
      gotPresent.add(b);

      expect(a).not.toEqual(b);
    }

    expect(givePresent.size).toEqual(4);
    expect(gotPresent.size).toEqual(4);
  });
  it("resolves 5 people", () => {
    const { service } = setup();

    const map = service.generate([
      "A", "B", "C", "D", "E"
    ]);

    const givePresent = new Set();
    const gotPresent = new Set();

    for (const [a, b] of map) {
      givePresent.add(a);
      gotPresent.add(b);

      expect(a).not.toEqual(b);
    }

    expect(givePresent.size).toEqual(5);
    expect(gotPresent.size).toEqual(5);
  });
  it("resolves 6 people", () => {
    const { service } = setup();

    const map = service.generate([
      "A", "B", "C", "D", "E", "F"
    ]);

    const givePresent = new Set();
    const gotPresent = new Set();

    for (const [a, b] of map) {
      givePresent.add(a);
      gotPresent.add(b);

      expect(a).not.toEqual(b);
    }

    expect(givePresent.size).toEqual(6);
    expect(gotPresent.size).toEqual(6);
  });
  it("resolves 7 people", () => {
    const { service } = setup();

    const map = service.generate([
      "A", "B", "C", "D", "E", "F", "G"
    ]);

    const givePresent = new Set();
    const gotPresent = new Set();

    for (const [a, b] of map) {
      givePresent.add(a);
      gotPresent.add(b);

      expect(a).not.toEqual(b);
    }

    expect(givePresent.size).toEqual(7);
    expect(gotPresent.size).toEqual(7);
  });
});
