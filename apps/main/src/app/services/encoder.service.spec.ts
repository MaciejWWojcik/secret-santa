import { EncoderService } from "./encoder.service";

describe("EncoderService", () => {
  function setup() {
    return {
      service: new EncoderService()
    };
  }

  it("should encode", () => {
    const { service } = setup();

    expect(service.encode("A")).toEqual("QQ==");
  });

  it("should decode", () => {
    const { service } = setup();

    expect(service.decode("QQ==")).toEqual("A");
  });
});
