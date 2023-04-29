1. `3` will be logged because that's its current value from line 6 as a function-scoped variable  
2. `150` will be logged because that's its current value from line 7 as a function-scoped variable  
3. `150` will be logged because that's its current value from line 8 as a function-scoped variable  
4. `[50, 150, 150]` will be returned because that's its final value from the loop beginning at line 6 as a function-scoped variable
5. Uncaught ReferenceError: `i` is not defined (`i` is in a different block scope than `log`)  
6. Uncaught ReferenceError: `discountedPrice` is not define (`discountedPrice` is in a different block scope than `log`)  
7. `150` will be logged because that's its most recent value from line 8 as a function-scoped variable  
8. `[50, 100, 150]` will be returned because that's its current value from the loop beginning at line 6 as a function-scoped variable
9. Uncaught ReferenceError: `i` is not defined(`i` is in a different block scope than `log`)  
10. `3` will be logged because that's its current value from line 2 as a function-scoped variable  
11. `[50, 100, 150]` will be returned because that's its final value from the loop beginning at line 6 as a function-scoped variable  
12. `student` object  
    A. `student.name`  
    B. `student['Grad Year']`  
    C. `student.greeting()`  
    D. `student['Favorite Teacher'].name`  
    E. `student.courseLoad[0]`  

13. Arithmetic  
    A. `32`: during string addition, non-strings are cast to strings  
    B. `1`: during subtraction, non-integers are cast to integers  
    C. `3`: item A where `null` evaluates to 0  
    D. `3null`: item B & C  
    E. `4`: during integer addition, true evaluates to 1  
    F. `0`: false and null evaluate to 0  
    G. `3undefined`: item A  
    H. `NaN`: item B  

14. Comparison  
    A. `true`: different types are compared as numbers  
    B. `false`: '2' does not come before '1' in lexicographical order  
    C. `true`: different types are compared as numbers  
    D. `false`: different types are immediately false with strict comparison  
    E. `false`: different types are compared as numbers, true evaluates to 1  
    F. `true`: 2 is true as a bool, therefore true is true  

15. The equality check (`==`) converts types to make the comparison, and the strict equality operator (`===`) does not.  
16. see `part2-question16.js`  
17. `modifyArray` will return `[2, 4, 6]`. The provided function `doSomething` returns double its parameter, and those values are being pushed onto `newArr`.  
18. see `part2-question18.js`  
19. At 0 seconds: `1`, `4`, `3`. After 1 second: `2`.