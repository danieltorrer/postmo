$(document).ready(function(){
	randomword()
	$("#quieromas").on("click",function(){
		randomword()
	})
})

function randomword(){
	var f1 = ["Me atrevo a afirmar que","La danza de", "Me cautiva como","Me sorprende como","Me conmueve como", "Me intriga que", "Um..","Ah..", 
	"Estoy sorprendido porque nadie haya mencionado como","La forma de","Es inconcebible como","Es inocuo como","No caigamos en el error de creer que","Llegado a este punto debemos considerar que"]

	var f2 = ["vicisitudes","la verborragia","el redescubrimiento","la evocación","la pre-vanguardia","la resonancia metafórica","la interpretación","la reinterpretación","la contextualización","la descontextualización","la subjetividad","lo fenotípico","lo ambivalente","la irreverencia","las filias","las fobias","los colores","la intención"
	,"el significado","la representación","la estética","la fuerza","la delicadeza","la fragmentación","la sensitividad","el humor","la perspicacia", "lo polifórmico", "lo semántico" , "la misticidad"]

	var f3 = ["la cosmogonía","la concatenación surrealista", "lo humano", "lo crítico", "el concepto", 
	"lo divergente", "lo semiótico", "lo sintético", "la experiencia", "el artista", "la obra", 
	"la reciprocidad", "la represión","los procesos de migración e hibridación genérica"]

	var f4 = ["plasma","une","distancia","contrapone","reinventa","proyecta","plasma","vislumbra","fructúa","converge","refleja", "diside", "fusiona", "retribuye", "refleja","reprime","inside","difiere","subyace","reinventa","clarifica","inflexiona","fracciona","invierte","fusiona"]

	var f5 = ["en un sentimiento iridiscente de lo sublime en las artes", 
	"en una participación del decálogo crítico de los 90's", 
	"en la elocuencia de las piezas oníricas", "en el substrato del pensamiento crítico", "en la divagación del alma en una generación sin intensidad", 
	"en la vanalidad del espíritu colectivo de la sociedad contemporanea",
	"en la simbolización latente del significado presente en el imaginario", 
	"en la reivindicacion de la actitud crítica conceptualizada en la simpleza del sentimiento", 
	"en la apropiación del vínculo parental reproducido por la semiótica inserta en la estética",
	"en una clara crítica a los procesos de producción modernos",
	"entre la realidad en devenir y el pensamiento en el que esta cobra conciencia de sí mismas.",
	"es justamente en la Historia en donde éste se expande y se autorreconoce más plenamente; en donde cobra plena autoconciencia de sí.",
	"la lógica intrínseca de la realidad.","es la expresión pensada de la esencia ontológica de lo real.",
	"estudia el llamado goce estético y la finalidad en el campo de la naturaleza.",
	"vinculada a la idea de libertad.","a pesar de su carácter oscuro y hermético",
	"cuyos efectos llegan hasta la actualidad.","en la teoría superrelativista de lo estético",
	"en las divergencias del dadaísmo en su etapa primera",
	"en la vacuidad de la estructura macrocapitalista",
	"en la objeción metafísica de la conciencia",
	"en una cohersión dando sustento a un entrelazamiento simbólico",
	"en un bucle sistemático de los procesos pro-capitalistas",
	"en una clara proposición ideática neo-fascista",
	"en la clara precisión libertina del mundo contemporaneo",
	"en la gradación de formas variadas",
	"en su aspecto externo"]

	var num = Math.floor(Math.random() *10 % f1.length)
	var num2 = Math.floor(Math.random()*10 % f2.length)
	var num3 = Math.floor(Math.random()*10 % f3.length)
	var num4 = Math.floor(Math.random()*10 % f4.length)
	var num5 = Math.floor(Math.random()*10 % f5.length)
		//console.log(f1.length + "," + f2.length + "," + f3.length)

		$("#frase").html('"' +  f1[num] + " " + f2[num2] + " de " + f3[num3] + " se " + f4[num4] + " " + f5[num5] + '"')
	}

function cortarpalabra(cadena){
	return cadena.substring(0,65)
}