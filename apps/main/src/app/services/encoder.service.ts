import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EncoderService {

  encode(value: string): string {
    return btoa(value);
  }

  decode(encoded: string): string {
    return atob(encoded);
  }
}
