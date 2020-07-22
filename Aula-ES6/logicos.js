// AND lógica (&&)
exp1 && exp2

//string sempre é true
// " " = true. String com espaço.
// 1 = true

// "" = false. String sem espaço
// 0 = false

var a1 = true   &&  true;       // true     &&  true retorna true
var a2 = true   &&  false;      // true     &&  false retorna false
var a3 = false  &&  true;       // false    &&  true retorna false
var a4 = false  &&  (3 == 4);   // false    &&  false retorna false
var a5 = "gato" &&  "cão";      // true     &&  true retorna "cão"
var a6 = false  &&  "gato";     // false    &&  true retorna false
var a7 = "gato" &&  false;      // true     &&  false retorna false

// Ou lógico (||)
exp1 || exp2

var a1 = true   ||  true;       // true     ||  true retorna true
var a2 = true   ||  false;      // true     ||  false retorna true
var a3 = false  ||  true;       // false    || true retorna true
var a4 = false  ||  (3 == 4);   // false    ||  false retorna false
var a5 = "gato" ||  "cão";      // true     ||  true retorna "gato"
var a6 = false  ||  "gato";     // false    ||  true retorna "gato"
var a7 = "gato" ||  false;      // true     ||  false retorna "gato"

// NOT lógico (!)
!exp1

var n1 = !true;     // !true retorna false
var n2 = !false;    // !false retorna true
var n3 = !"gato"    // !true retorna false