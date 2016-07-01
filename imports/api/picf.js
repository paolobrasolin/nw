import { Chance } from 'meteor/risul:chance';

const chance = new Chance();

function isValidPI(pi) {
  if( pi == '' )  return false;
  if( pi.length != 11 ) return false;
  validi = "0123456789";
  for( i = 0; i < 11; i++ ){
      if( validi.indexOf( pi.charAt(i) ) == -1 ) return false;
  }
  return controlDigitPI(pi) === pi.charAt(10);
}

function controlDigitPI(pi){
  s = 0;
  for( i = 0; i <= 9; i += 2 )
      s += pi.charCodeAt(i) - '0'.charCodeAt(0);
  for( i = 1; i <= 9; i += 2 ){
      c = 2*( pi.charCodeAt(i) - '0'.charCodeAt(0) );
      if( c > 9 )  c = c - 9;
      s += c;
  }
  return ( 10 - s%10 )%10;
}

function randomPI() {
  var pi = chance.string({
    length: 10,
    pool: '0123456789',
  });
  return pi + controlDigitPI(pi);
}

function isValidCF(cf) {
  var validi, i;
  cf = cf.toUpperCase();
  if( cf.length != 16 )
    return false;
  validi = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for( i = 0; i < 16; i++ ){
    if( validi.indexOf( cf.charAt(i) ) == -1 )
      return false;
  }
  return controlDigitCF(cf) === cf.charAt(15);
};

function controlDigitCF(cf) {
  var i, s, set1, set2, setpari, setdisp;
  cf = cf.toUpperCase();
  set1 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  set2 = "ABCDEFGHIJABCDEFGHIJKLMNOPQRSTUVWXYZ";
  setpari = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  setdisp = "BAKPLCQDREVOSFTGUHMINJWZYX";
  s = 0;
  for( i = 1; i <= 13; i += 2 )
    s += setpari.indexOf( set2.charAt( set1.indexOf( cf.charAt(i) )));
  for( i = 0; i <= 14; i += 2 )
    s += setdisp.indexOf( set2.charAt( set1.indexOf( cf.charAt(i) )));
  return setpari[s%26];
}

function randomCF() {
  var cf = chance.string({
    length: 15,
    pool: 'ABCDEFGHIJKLMNOPQRSTUVWXZY0123456789',
  });
  return cf + controlDigitCF(cf);
}

var PI = {
  random: randomPI,
  validate: isValidPI,
};

var CF = {
  random: randomCF,
  validate: isValidCF,
};

export { PI };

export { CF };

