function binToDec(number){
  var result=0;
	for(i=number.length-1, j=0; i>=0; i--, j++){
		var help= parseInt(number.charAt(i));
		help *= Math.pow(2,j);
		result+=help;
	}
	return result;
}

function binToOct(number){
  var dec = binToDec(number);
  var tablica = new Array();
  while(dec > 0) {
    tablica.unshift(dec % 8);
    dec-=dec%8;
    dec/=8;
    }
	return tablica.join("");
}

function binToHex(number){
  var dec = binToDec(number);
  var tablica = new Array();
  while(dec > 0) {
        switch(dec%16){
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          tablica.unshift(dec%16);
          break;
          case 10:
          tablica.unshift("A");
          break;
          case 11:
          tablica.unshift("B");
          break;
          case 12:
          tablica.unshift("C");
          break;
          case 13:
          tablica.unshift("D");
          break;
          case 14:
          tablica.unshift("E");
          break;
          case 15:
          tablica.unshift("F");
          break;
        }
        dec-=(dec%16);
        dec/=16;
      }
	return tablica.join("").toString();
}

function decToBin(dec) {
  tablicaBin = [];
  while(dec > 0) {
    tablicaBin.unshift(dec % 2);
    dec-=dec%2;
    dec/=2;
    }
    return tablicaBin.join("");
}

function decToOct(dec) {
  var oct = decToBin(dec);
  oct = binToOct(oct);
  return oct;
}

function decToHex(dec) {
  var hex = decToBin(dec);
  hex = binToHex(hex);
  return hex;
}

function hexToDec(hex){
  var result=0;
	for(i=hex.length-1, j=0; i>=0; i--, j++){
		var help= hex.charAt(i);
		switch(help){
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			help = parseInt(help);
			break;
			case 'A':
			help = 10;
			break;
			case 'B':
			help = 11;
			break;
			case 'C':
			help = 12;
			break;
			case 'D':
			help = 13;
			break;
			case 'E':
			help = 14;
			break;
			case 'F':
			help = 15;
			break;
		}
		help *= Math.pow(16,j);
		result+=help;
	}
	return result;
}

function hexToOct(hex) {
  var oct = hexToDec(hex);
  oct = decToOct(oct);
  return oct;
}

function hexToBin(hex) {
  var bin = hexToDec(hex);
  bin = decToBin(bin);
  return bin;
}

function octToDec(oct){
		oct = oct.split('').reverse().join('');
		wynik = 0;
		for(miejsce = 0;miejsce < oct.length;miejsce++) {
		wynik += parseInt(oct[miejsce]) * Math.pow(8,miejsce);
		}
		return wynik;
}

function octToHex(oct) {
  var dec = octToDec(oct);
  dec = decToHex(dec);
  return dec;
}

function octToBin(oct) {
  var bin = octToDec(oct);
  bin = decToBin(bin);
  return bin;
}

function decToUOne(number){
	if(number>=0){
		return decToBin(number);
	}
	else{
		var uOne = parseInt(number)+255;
		uOne = decToBin(uOne);
		if(uOne.length<8){
			var stala = uOne.length;
			for(var i=8; i>stala; i--){
				uOne = "0" + uOne;
			}
			return uOne;
		}
		else return uOne;
	}
}

function zm(dec){

		if(dec<0){
		ujemna = true;
		dec*=-1;
		} else {
		ujemna = false;
		}
        tablicaBin = [];

        while(dec > 0) {
          tablicaBin.unshift(dec % 2);
          dec-=dec%2;
          dec/=2;
        }
				if(ujemna) {
				tablicaBin.unshift(1);
				} else {
				tablicaBin.unshift(0);
			}
	return tablicaBin.join("");
	}

function decToUTwo(number){
	if(number>=0){
		return decToBin(number);
	}
	else{
		var uTwo = parseInt(number)+256;
		uTwo = decToBin(uTwo);
		if(uTwo.length<8){
			var stala = uTwo.length;
			for(var i=8; i>stala; i--){
				uTwo = "0" + uTwo;
			}
			return uTwo;
		}
		else return uTwo;
	}
}

function fpToDec(fp) {
	miejsceprzecinka = 0;
	while(miejsceprzecinka < fp.length) {
	if(fp[miejsceprzecinka] == "."){
	break;
	} else {
	miejsceprzecinka++;
	}
	}

	poprzecinku=0;
	for(miejsce = miejsceprzecinka + 1;miejsce < fp.length;miejsce++) {
	poprzecinku += fp[miejsce] / Math.pow(2,miejsce - miejsceprzecinka);
	}

	return binToDec(String(parseInt(fp))) + poprzecinku;
}

function decToFP(number){
		number = parseFloat(number);
		units = parseInt(number);
		afterpoint ="";

		rest = number - units;
		units = decToBin(units);
		for(var i=0; i<8 && rest!=0; i++){
			rest*=2;
			if(rest>=1){
				afterpoint += "1";
				rest-=1;
			}
			else{
				afterpoint += "0";
			}
		}
		return units + "," + afterpoint;
}

function changeContent(content){

	oldContent = document.getElementById("content");

  switch(content) {

  	case "binToOct":
  	oldContent.innerHTML = examples(content);
  	break;

  	case "binToDec":
  	oldContent.innerHTML = examples(content);
  	break;

  	case "binToHex":
  	oldContent.innerHTML = examples(content);
  	break;

  	case "octToBin":
  	oldContent.innerHTML = examples(content);
  	break;

  	case "octToDec":
  	oldContent.innerHTML = examples(content);
  	break;

  	case "octToHex":
  	oldContent.innerHTML = examples(content);
  	break;

  	case "decToBin":
  	oldContent.innerHTML = examples(content);
  	break;

  	case "decToOct":
  	oldContent.innerHTML = examples(content);
  	break;

  	case "decToHex":
  	oldContent.innerHTML = examples(content);
  	break;

  	case "hexToBin":
    oldContent.innerHTML = examples(content);
  	break;

  	case "hexToOct":
  	oldContent.innerHTML = examples(content);
  	break;

  	case "hexToDec":
  	oldContent.innerHTML = examples(content);
  	break;

    case "zmToDec":
  	oldContent.innerHTML = "Zamiana ZM na dziesiętny.";
  	break;

    case "decToZM":
  	oldContent.innerHTML = "Zamiana dziesiętny na ZM.";
  	break;

    case "fpToDec":
  	oldContent.innerHTML = "Zamiana FP na dziesiętny.";
  	break;

    case "decToFP":
  	oldContent.innerHTML = "Zamiana dziesiętny na FP.";
  	break;

    case "uOneToDec":
  	oldContent.innerHTML = "Zamiana U1 na dziesiętny.";
  	break;

    case "decToUOne":
  	oldContent.innerHTML = "Zamiana dziesiętny na U1.";
  	break;

    case "uTwoToDec":
  	oldContent.innerHTML = "Zamiana U2 na dziesiętny.";
  	break;

    case "decToUTwo":
  	oldContent.innerHTML = "Zamiana dziesiętny na U2.";
  	break;
  }
}

var wyniki = new Array(10);

function examples(content){
    var tablica = new Array(10);
    var tablica2 = new Array(10);
    var tabelka = "<table>";

    //losowanie przykładów
    for(var i=0; i<10; i++){
      tablica[i] = Math.floor(Math.random()*100);
    }

    //zamiana przykładów na to z czego mają być konwertowane
    switch(content) {
    	case "binToOct":
    	case "binToDec":
    	case "binToHex":
        for(var i=0; i<10; i++){
          tablica2[i] = decToBin(tablica[i]);
        }
        tabelka+="<h3>Binarny na ";
      break;

    	case "octToBin":
    	case "octToDec":
    	case "octToHex":
      for(var i=0; i<10; i++){
        tablica2[i] = decToOct(tablica[i]);
      }
      tabelka+="<h3>Ósemkowy na ";
    	break;

    	case "hexToBin":
    	case "hexToOct":
    	case "hexToDec":
      for(var i=0; i<10; i++){
        tablica2[i] = decToHex(tablica[i]);
      }
      tabelka+="<h3>Szesnastkowy na ";
    	break;

      case "decToBin":
    	case "decToOct":
    	case "decToHex":
      for(var i=0; i<10; i++){
        tablica2[i] = tablica[i];
      }
      tabelka+="<h3>Dziesiętny na ";
    	break;
  /*
      case "zmToDec":
      for(var i=0; i<10; i++){
        tablica[i] = decToZM(tablica[i]);
      }
    	break;

      case "fpToDec":
      for(var i=0; i<10; i++){
        tablica[i] = decToFP(tablica[i]);
      }
    	break;

      case "uOneToDec":
      for(var i=0; i<10; i++){
        tablica[i] = decToUOne(tablica[i]);
      }
    	break;

      case "uTwoToDec":
      for(var i=0; i<10; i++){
        tablica[i] = decToUTwo(tablica[i]);
      }
    	break;
  */
    }

    //wyniki
    switch(content) {
    	case "binToOct":
      case "hexToOct":
      case "decToOct":

        for(var i=0; i<10; i++){
          wyniki[i] = decToOct(tablica[i]);
        }
        tabelka+="ósemkowy </h3>";
      break;


    	case "octToDec":
      case "binToDec":
      case "hexToDec":

      for(var i=0; i<10; i++){
        wyniki[i]=tablica[i];
      }
      tabelka+="dziesiętny </h3>";
    	break;

    	case "hexToBin":
      case "octToBin":
    	case "decToBin":

      for(var i=0; i<10; i++){
        wyniki[i] = decToBin(tablica[i]);
      }
      tabelka+="binarny </h3>";
    	break;

      case "binToHex":
      case "octToHex":
      case "decToHex":
      for(var i=0; i<10; i++){
        wyniki[i] = decToHex(tablica[i]);
      }
      tabelka+="szesnastkowy </h3>";
      break;
  /*
      case "zmToDec":
      for(var i=0; i<10; i++){
        tablica[i] = decToZM(tablica[i]);
      }
    	break;

      case "fpToDec":
      for(var i=0; i<10; i++){
        tablica[i] = decToFP(tablica[i]);
      }
    	break;

      case "uOneToDec":
      for(var i=0; i<10; i++){
        tablica[i] = decToUOne(tablica[i]);
      }
    	break;

      case "uTwoToDec":
      for(var i=0; i<10; i++){
        tablica[i] = decToUTwo(tablica[i]);
      }
    	break;
    }
    */
    }


    for(counter=0;counter<10;counter++){
      tabelka+='<tr><td>' + tablica2[counter] + '</td><td>=</td><td><input type="text" id="odp'+counter+'"></td><td><button onclick="check('+counter+')">Sprawdź</button></td><td id="wynik'+counter+'"></td></tr>';
    }
    tabelka+="</table>";

    return tabelka;

}

function check(counter){
  var nazwa1 = "wynik"+counter;
  var nazwa2 = "odp"+counter;
  var poprawna = document.getElementById(nazwa1);
  var odpowiedz = document.getElementById(nazwa2);

  var odp = (odpowiedz.value).toString();
  if(odp==wyniki[counter])
    poprawna.innerHTML = "✔";
  else
    poprawna.innerHTML = "❌";

}
