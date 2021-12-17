### How to run ? 
```
node solve.js
```

### My Approach  :)

- Split the given equation into tokens (using slicing/slice)
- Find the token which contains the '?' character (using indexOf method)
- Find the answer wrt to the missing token and check the validity of the equation to avoid any floating point mistakes. For ex. if the equation is 2 * 12? + 2 = 247 then the token 12? will be replaced by a float number while calculating the answer ie ((247-2)/2) so a validation of the equation will make sure to avaoid such problems.
- Now we will compare our ans and the token which contains '?' and extract the number which will replace '?'.
- We will also check the length of both answer and '?' containing token for avoiding leading zero problem.

### Screenshots for the testcases
![](/screenshots/symbl-1.png)
![](/screenshots/symbl-2.png)
![](/screenshots/symble-3.png)
![](/screenshots/symbl-4.png)
![](/screenshots/symbl-5.png)