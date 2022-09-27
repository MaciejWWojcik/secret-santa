import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SantaManagerService {

  generate(names: string[]): Map<string, string> {
    let map: Map<string, string> = new Map<string, string>();

    const correctlyAssigned = () => {
      const givePresent = new Set();
      const gotPresent = new Set();

      [...map.entries()].forEach(([santa, assignee]) => {
        givePresent.add(santa);
        gotPresent.add(assignee);
      });

      return map.size === names.length &&
        givePresent.size === gotPresent.size &&
        [...map.entries()].every(([santa, assignee]) => santa !== assignee);
    };

    while (!correctlyAssigned()) {
      map = new Map<string, string>();
      const todo = [...names];

      names.forEach(santa => {
        const assigneeIndex = Math.floor(Math.random() * todo.length);
        map.set(santa, todo[assigneeIndex]);
      });
    }

    return map;
  }
}
