# JavaScript(ECMA script)

# Introduction

1. Javascript is a high level,object oriented and multi paradigm(use different style of programming like: imperative and declarative) programming language.
2. It allow to dynamic and interactive effect to any webpage.
3. Javascript on browser called front end website while javascript on webserver(with nodejs) is called backend website. we can also used to develop native mobile or desktop application.
4. Values is a piece of data.
5. Variables name like in different ways a. camelcase (ex: firstName) b. ex: first_name_person
6. In js value are mainly two types 1. object(ex: let me ={name: "khushal"};) 2. Primitive (ex: let firstName ="khushal");
7. There are 7 primitive data types : 1. number(ex: let marks=5;) 2. string (ex: let myName = "khushal";) 3. bool (ex: let checker = true;) 4. undefined (ex; let childeren;) 5. null (empty value) 6. Symbol( value that is unique and cannot be changed (not used for now)) 7. BigInt(larger integers than the number type can hold )
8. Js has dynaming typing that means we dont have to manually define datatype
9. Value has a type not variable.(IMP)
10. Comment : single line // multiple line /\* \*/
11. There are three ways to declare variables in js : 1. let (blocked scope) 2. var(function scoped) 3. const(are immutable means cant declare empty const variable)
12. Operators : 1. mathmetical or airthmetic operator 2. assignment operator 3. Comparsion operator
13. Template literal : writes string in more normal way and add varibles between them normally.(used backticks ``)
    14.Type Conversion (manually convert from one type to another) , Type Coercion(js automatically converts types).
    15.Truthy and falsy Values: 1. falsy values are value that are not excatly false but will become false when we try to convert them into boolean. 2. there are five falsy values 0,'',undefined,null,NaN
14. Equality operator: ===(is called strict equality operator because it doesnt perform type coericon it only true when both values are same) and ==(loose equality operator)
    ex: '18'==18 (true)
    '18'===18(false)
15. prompt function : getting any value from webpage.
16. expression is a peice of code that produce a value.(ex: 3+4 , 1991). Statement is like bigger piece of code that excuted and which does not produce a value on itself.
    19.Brendan Eich creates the very first version of js in just 10days called Mocha.(1995)
17. Mocha changes to LiveScript then to JavaScript.(1996)
    21.Microsoft lanuches internet explorer copying js from Netscape and called it Jscript.
18. Standardize the language ,ECMA relaease ECMAScript(ES1), the first official standard for js(1997).
19. ES5 is realeased with lots of greatnew features(2009). and then ES6(2015).
20. Js is backward compatibility(means use old code in now days but not forward compatiblity)
21. to make forward compatiblity we use transpilling and polyfilling using Babel.
    26.Prettier is an opinionated code formatter which made assumption how good code should look like.
22. live server extension work that we dont have to reload the browser.
23. there is more proffesional way to run server using nodejs which is js runtime.
    24.first installed nodejs then use npm pakage called live server there.
24. nodejs is a way of running js outside of a browser, it also way of running developer tool like the live server that we want to install.
25. node -v to check version
26. npm install live-server -g
