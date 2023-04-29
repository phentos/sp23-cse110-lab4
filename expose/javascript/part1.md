1. `values added: 20`
2. `final result: 20`
3. `values added: 20`
4. Uncaught ReferenceError: `result` is not defined
    - `result` is in a different block scope than `log` in line 13
5. Uncaught TypeError: Assignment to constant variable.
    - line 7 attempts to reassign the value of `result`
6. Uncaught ReferenceError: `result` is not defined
    - `result` is in a different block scope than `log` in line 13