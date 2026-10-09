import { isTestLead } from "../lib/lead-test-markers";
const cases: [string, Record<string, unknown>, { header?: string; query?: string }, boolean][] = [
  ["TEST name", { name: "TEST Attribution" }, {}, true],
  ["Test Lead", { name: "Test Lead" }, {}, true],
  ["test@ email", { name: "Ann Lee", email: "test@gmail.com" }, {}, true],
  ["test+ email", { name: "Ann Lee", email: "test+1@gmail.com" }, {}, true],
  ["example.com", { name: "Ann Lee", email: "a@example.com" }, {}, true],
  ["header", { name: "Ann Lee" }, { header: "1" }, true],
  ["query", { name: "Ann Lee" }, { query: "1" }, true],
  ["hidden flag", { name: "Ann Lee", __primara_test: "1" }, {}, true],
  ["real: Testa", { name: "Testa Rossi", email: "t@clinic.com" }, {}, false],
  ["real: Tester", { name: "Tester Jones" }, {}, false],
  ["real", { name: "Dr. Maria Lopez", email: "maria@familycare.com", reason: "More patients" }, {}, false],
];
let bad = 0;
for (const [n, f, o, want] of cases) if (isTestLead(f, o) !== want) { console.error("FAIL", n); bad++; }
if (bad) process.exit(1);
console.log(`lead-test-markers: ${cases.length}/${cases.length} ok`);
