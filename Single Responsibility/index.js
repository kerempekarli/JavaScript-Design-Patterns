const fs = require("fs");

class Journal {
  constructor(prop) {
    this.entries = {};
  }
  addEntry(text) {
    let c = ++Journal.count;
    let entry = `${c}: ${text}`;
    this.entries[c] = entry;
    return c;
  }

  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join("\n");
  }

  save(filename) {
    fs.writeFileSync(filename, this.toString());
  }

  load(filename) {
    //
  }
  loadFromUrl() {
    //
  }
}

class PersistenanceManager {
  preprocess(j) {}

  saveToFile(journal, filename) {
    fs.writeFileSync(filename, journal.toString());
  }
}

Journal.count = 0;
let j = new Journal();
j.addEntry("I cried today");
j.addEntry("I eat a bug");
console.log(j.toString());

let p = new PersistenanceManager();
let filename =
  "D:\\JavaScript Design Patterns\\Single Responsibility\\text.txt";
p.saveToFile(j, filename);
