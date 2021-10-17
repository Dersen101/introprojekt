/* 1.  Skriv en funktion, som kan svare på om en værdi findes i et array.
    F.eks. vil svaret på om 4 findes i [1, 2, 3] være false.

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository. */

    
    
    /*function find(x,y) {
    let array =x;
        for(let i = 0; i < array.length; i++) {
            if (array[i] == y) {
                 return true
            }
        };
        return false
} 

    console.log(find([1,2,3],4)) */

class opg1 {
    constructor(arr) {
        this.arr = arr
    }

    find (y) {
        for(let i = 0; i < this.arr.length ; i++) {
            if (this.arr[i] === y) {
                 return true
            }
        };
        return false
    }
}

let testt = new opg1([1,2,3])
console.log(testt.find(4))

    /*Skriv en funktion, som kan udregne summen af tallene i et array.
    F.eks. vil summen af [1, 2, 3] være 6.

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository. */

    function sum (k) {
        let sum = 0;
        let l = k; //k er input, i dette tilfælde kommer det til at være et array
        for(let j = 0; j < l.length; j++) {
            sum = sum+l[j]
        }
        return sum
    }
        console.log(sum([1,2,3]))
    

/*
3.  Skriv en funktion, som finde det højeste og det laveste tal i et array.
    F.eks. vil svaret på [1, 2, 3, 4, 5] være [1, 5].

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository. */

let array1 = [1,2,3,4,5];

let max = array1[0];
let low = array1[0];


function highlow() { //fejl, ikke min kode, kan "kun" få max og low seperat
    // link: https://stackoverflow.com/questions/38256170/find-the-smallest-and-largest-value-in-an-array-with-javascript 

    for(let a = 0; a <array1.length; a++) {
        let test = array1[a];
        if(test > max) {
            max = array1[a];
        }

        if (test < low) {
            low = array1[i];
        }

    }
    console.log(max);
    console.log(low);

}

/*
4.  Skriv en funktion, som kan konkatitenere 2 rækker af tal.
    F.eks. vil [1, 2, 3] og [4, 5, 6]. blive til [1, 2, 3, 4, 5, 6]

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository. */

// https://www.w3schools.com/jsref/jsref_concat_array.asp
// man kan også brugt push();

function merge (arr1, arr2) {

    let cage = arr1.concat(arr2)

    return cage
};

console.log(merge([1,2,3],[4,5,6]));

/*
5.  Skriv et funktion, som kan tjekke om et array er symmetrisk eller ej.
    F.eks. er [1, 2, 2, 1] symmetrisk, hvorimod [1, 2, 3, 4] ikke er.

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository. */


// https://stackoverflow.com/questions/15299312/checking-if-array-is-symmetric 

function symm (arr) {
    let int = arr.length-1;

    for(let b = 0; b < arr.length; b++) {
        console.log(arr[b]); console.log(arr[int]);
        if(arr[b] == arr[int]) {
            int--
        }
        else {
            return false
        }

    }
    return true
}

console.log(symm([1,2,3,4]));

/*6.  Skriv en funktion, som kan bestemme hyppigheden af hvert tal i et array.
    F.eks. kunne "[0, 1, 1, 1, 2, 3, 3]" blive til "[[1, 0], [3, 1], [1, 2], [2, 3]]".

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository. */
     //https://www.tutorialspoint.com/looping-through-and-getting-frequency-of-all-the-elements-in-an-array-javascript 

function freq (arr) {
    let ind = {};
    arr.forEach(el => {
        if(ind[el]){
            ind[el]++;
        }
        else {ind[el] = 1;}
    });
    return ind;
}

console.log(freq([1,1,1,0,2,3,3]));


/* 7. Skriv en funktion, som kan simulere terningekast med forskellige antal terninger og sider.
    F.eks. kunne resultatet af 3 terninger med 10 sider være [3, 5, 9].

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository. */

// https://stackoverflow.com/questions/47964912/multiple-dice-rolls-multiple-results 

function tern(d, s) {

    function side(s) {
        if(!s) s = 6;
        return 1 + Math.floor(Math.random() * s);
    }

    let total = [];
    while(d-- > 0) total.push(side(s));
    return total;
}

console.log(tern(3, 6))

/* 8.  Skriv en funktion, som kan bortfiltrere alle værdierne i et array, som er over en given værdi.
    F.eks. vil en bortfiltrering af tal over 2 i arrayet [1, 2, 3, 4, 5] blive til [1, 2].

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository. */
// https://www.digitalocean.com/community/tutorials/js-filter-array-method - jeg kan ikke lide denne metode, men det er den eneste jeg forstår

let arrfilt = [1,2,3,4,5];

let filtnum = arrfilt.filter(function(num) {
    return num <= 2
        
    });

console.log(filtnum);

/* 9.  Skriv en funktion, som kan ændre et array til at stå i omvendt ræ
kkefølge.
    F.eks. vil [1, 2, 3, 4] blive til [4, 3, 2, 1]

    Vis hvordan funktionen kan gøres til en metode i en class.

    Beskriv koden med et flowchart og offentliggør den på et git repository. */
// https://www.javatpoint.com/javascript-array-reverse-method

function reverse (arr) {
    arr.reverse()
    return arr

}

console.log(reverse([1,2,3,4]));

/* 10. Skriv en funktion, som kan udregne længden af den ukendte side i en retvinklet trekant.
    F.eks. vil længden af hypotenusen i en trekant med kateter af længde 3 og 4 være sqrt(3^2 + 4^2) = sqrt(25) = 5.

    Beskriv koden med et flowchart og offentliggør den på et git repository. */

function hypo (s1,s2) {
    return Math.hypot(s1, s2);
    
}

console.log(hypo(3,4));

//-------------------------------







    
    