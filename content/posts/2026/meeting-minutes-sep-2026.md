+++
title = 'Meeting Minutes, Sep 2026'
author = 'Gopinathan'
date = '2026-09-16T09:06:48+05:30'
+++

Here is the quick recap of what happend in ILUGC Monthly meet, September 12, 2026.


### Intro

- Gopi welcomed the participants and gave small introduction about ILUGC

### Talk 0 - Clang AST tools

- Compiler Pipeline: C/C++ code goes through Clang Frontend -> AST -> LLVM IR -> Backend -> Machine code/binary.
- The AST represents the structure and meaning of source code. so tools can understand constructs like struct, pointers, function call, expression, etc...
- Matchers & Refactoring: Clang AST Matchers let you find specific code patterns and safely transform them.
- Why not Regex or IR? Regrex only sees text and can't reliably understand C/C++ syntax; IR is lower-level and loses important source-level details.

![Talk 0](/images/20260912-talk1.jpeg)

### Talk 1 - The Nix Philosophy 

- Introduction about and Nix and its philosophy
- The basics of nixos and the nix way of doing things.
- The talk also featured my NixOS setup. 

![Talk 1](/images/20260912-talk0.jpeg)



### Post Talk Discussion 

- They discussion revolved around the larger implications of Linux & Nix

![Group](/images/20260912-group.jpeg)
