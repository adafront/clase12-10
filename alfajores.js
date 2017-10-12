var x = ["a","l","f","a"];
var y = ["a","l","f","a","j","o","r"];

/*
• Ambos arreglos son iguales
• Cuál de los dos es más largo
• Cuantas letras tienen en común
*/
var distinto = false;

var xL = x.length; 
var yL = y.length;
var N;
var M;

if(xL == yL){
	for(i=0;i<x.length;i++){

		if(x[i] != y[i]){
			distinto = true;
		}
	}
}else{
	if(xL > yL){
		console.log("X es mas largo");
		N = yL;
		M = xL;
	}else{
		N = xL;
		M = yL;
		console.log("Y es el mas largo");
	}
}

var cont=0;
for(i=0;i<N;i++){

	for(j=0;j<M;j++){

		if(x[i] == y[j]){
			cont++;
		}
	}
}

console.log(cont);


/*a [a l f a j o r]  

var match = [];
*/




