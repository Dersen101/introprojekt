/*11. Skriv en funktion, som kan kan udregne et tals fakultet.
    F.eks. er fakultet af 4  = 1 * 2 * 3 * 4 = 24.

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository. */
//https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/ - for loop

function sqr (num) {
    if(num === 0 || num === 1) {
        return 1;
    }

    for (let s = num - 1; s>= 1; s--) {
        num *= s;
    }
    return num;
}

console.log(sqr(4));


/* 12. Skriv en funktion, som kan udregne potensener.
    F.eks. er 2^2 = 4, 2^3 = 8, 2^4 = 16, osv.

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository. */

function pow (n,p) {
    return Math.pow(n,p)
    
}

console.log(pow(3,4));


/*13. Skriv en funktion, som kan bestemme om alle tallene i en række er ens.
    F.eks. er tallene [1, 2, 3] ikke ens, hvorimod tallene i [1, 1, 1] er ens.

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository. */

function equ (arr) {
    for (let t = 0; t < arr.length; t++) {

        for(let g = arr[t]; g === t; g++) {
            return true
        }
    }
    return false
}

console.log(equ([1,2,1,1]));

/*14. Skriv en funktion, som kan bortfiltrere ulige tal fra en række af tal.
    F.eks. vil [1, 2, 3, 4, 5] blive til [2, 4].

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository. */
// https://stackoverflow.com/questions/43131836/remove-odd-numbers-in-array/43131869  
function sort (arr) {
    
    let arr1 = arr.length;

    for(let p = 0; p <= arr1; p++) {

        for(let v = 0; v < arr.length; v++) {
            if(arr[v] % 2 === 1) {
            arr.splice(v,1);
            break
            }
        } 
    }
    return arr
}

console.log(sort([1,2,3,4,5,6,6]));

/*15. Skriv en funktion, som kan tællene antallet af ord i en string.
    F.eks. er der 7 ord i "Dette er en string med syv ord.".

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository. */
    //https://stackoverflow.com/questions/18679576/counting-words-in-string
function countt (str) {
    return str.split(' ').length;
}

console.log(countt("hej med dig jeg hedder kaj"))

/*16. Skriv en funktion, som kan konvertere en række af sekunder til timer/minutter/sekunder.
    F.eks. vil [30, 90, 3690] blive til ["0/0/30", "0/1/30", "1/1/30"]

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository. */
// https://stackoverflow.com/questions/37096367/how-to-convert-seconds-to-minutes-and-hours-in-javascript 
function time (sec) {
    sec = Number(sec);

    let h = Math.floor(sec/3600)
    let m = Math.floor(sec % 3600 / 60);
    let s = Math.floor(sec % 3600 % 60);

    let hdis = h > 0 ? h + (h == 1 ? " / ": " / "): "";
    let mdis = m > 0 ? m + (m == 1 ? " / ":" / " ): "";
    let sdis = s > 0 ? s + (s == 1 ? " / ":" / " ): "";

    return hdis +  mdis + sdis
}

console.log(time(5347),time(6421))

/*17. Skriv en funktion, som kan bestemme om et tal er et primtal (kun 1 og tallet selv går op i det).
    F.eks. er 2, 3, 5, 7, 11 primtal, hvorimod 4, 6, 8, 9 og 12 ikke er primtal.

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository. */
// https://stackoverflow.com/questions/40200089/number-prime-test-in-javascript 
    function prime (pri) {

        for(var p = 2; p < pri; p++)

          if(pri % i === 0) return false;
        return pri > 1;
      }
    console.log(prime([2]))

/* 18. Lav et spil hvor spilleren skal gætte et tilfældigt tal genereret af computeren.
    F.eks. kunne computeren generere et tal mellem 1 og 100 og give spilleren 10 forsøg.
    Brug eventuelt, alert(), prompt() og Math.random().

    Beskriv koden med et flowchart og offentliggør den på et git repository. */
// hahaha


/* 19. Skriv en funktion, som kan tjekke om et bestemt ord findes i en tekst.
    F.eks. tjek om teksten "Indeholder denne tekst ordet 'programmering'?" indeholer ordet "programmering".

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository. */

    function includes (text, subtext) {

        for(let k = 0; k < text.length; k++) {

            for(let h = 0; h < subtext.length; h++) {

                console.log(text[k + h], subtext[h], text[k + h] == subtext[h]);

                if(text[k+h] != text[h]) {
                    break;
                }
                if(h == subtext.length-1) {
                    console.log(text, subtext);
                    return true;
                }
                
            }
            
        }
        return false;
        
    
    }
    // returner kun true, og kan ikke læse mig frem til fejlen
    console.log(includes("indeholder denne tekst ordet programmering", "zzz"));

/* 20. Skriv en funktion, som fra to arrays kan finde de sæt, som er tættest på et bestemt tal.
    F.eks. vil [[2, 6], [3, 5]] være svaret på arrays [1, 2, 3] og [4, 5, 6] hvor sættene skal være tættest på 8. ****

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository. */
// fatter hat 

/* 21. Skriv en funktion, som kan bortfiltrere de værdier i et array der opfylder en betingelse angivet af en callback funktion.
    F.eks. vil en bortfiltrering på [1, 2, 3, 4, 5] med callback funktionen "function (x) {return x > 2;}" resultere i [1, 2].

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository. */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
let callback = function (x) {
    return x > 2;
}

function filter (arr) {
    
    for(let i = 0; i < arr.length; i++) {
        if(callback) {
            arr.splice(arr.length-1,1)
        }
    }
    return arr;

}
console.log(filter([1,2,3,4,5])) // den virker ikke

/*22. Skriv en funktion, som kan producere et givent antal af de første værdier fra fibonacci sekvensen (summen af de to forrige tal bliver til det næste tal).
    F.eks. er produktionen af de første 7 tal 1, 1, 2, 3, 5, 8, 13.

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository. */
// https://www.programiz.com/javascript/examples/fibonacci-series
function fibo (x) {

    let n1 = 0, n2 = 1, nextterm;
    
    for(let i = 1; i <= x; i++) {
        console.log(n1);
        nextterm = n1 + n2;
        n1 = n2;
        n2 = nextterm;
    }
}

console.log(fibo(5))

/*23. Skriv en funktion. som kan udregne kvadratrødder.
    F.eks. er  kvadratroden af 4 2, 9 3, 16 4, osv.

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository. */
function hsqrt (num) {
    return Math.sqrt(num)
}

console.log(hsqrt(9))

// eller https://www.code4example.com/javascript/how-to-calculate-square-root-without-using-sqrt-function-in-javascript/ 

function groot (num) {
    let square = 1;
    let i = 0;

    while (true) {
        i = i + 1;
        square = (num / square + square) /2;
        
        if (i == num + 1) {
            break;
        }
    }
    return square
}
console.log(groot(9))




/*24. Skriv en funktion, som kan generere alle mulige kombinationer af en række symboler med en given længde.
    F.eks. er de mulige kombinationer af ["a", "b"] med en længde på 2: aa, ab, ba, bb.

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository. */
// https://stackoverflow.com/questions/43241174/javascript-generating-all-combinations-of-elements-in-a-single-array-in-pairs 
function comb (arr) { // kun i to par
    let res = [];

    for(let i = 0; i < arr.length; i++ ) {
        for(let j = 0; j < arr.length; j++) {
            res.push(arr[i] + arr[j])
        }
    }
    return res
}

console.log(comb(["a","b"]))

/*25. Skriv en funktion, som kan sortere et array af tal.
    F.eks. kunne "[3, 5, 2, 1, 2]" blive til "[1, 2, 2, 3, 5]".

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository. */
// https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly 
function sorte (arr) {

    arr.sort(function(a,b) {
        return a - b;
    });

    return arr
}

console.log(sorte([4,5,3,1,1,2]))