# Portable UI Contracts: shadcn

Start at [the library index](library/library.json) and [the reading skill](skills/ui-contracts/SKILL.md).
Copy this entire directory to use it independently. Relative paths are package-local.
The skill is designed for use in this package; do not move its folder without the package.

[The manifest](manifest.json) hashes every payload file (it excludes itself).
Revision is SHA-256 of the compact UTF-8 JSON array of sorted [path, sha256] pairs.
This establishes snapshot integrity, not contract or browser acceptance.

[Provenance](provenance.json) preserves original source hashes and lists transformed files.
Export copies replace repository-local historical references with non-resolving provenance URIs.
These URIs are historical identifiers, not links or executable commands. Text may describe
original export commands; those tools are not included and cannot be run from this package.
Historical receipts retain original hashes: they are not current verification receipts after
reference rewriting. The original library is never changed. Binary assets are copied byte-for-byte.
[Dependencies](dependencies.json) distinguishes included data from external provenance and tools.
