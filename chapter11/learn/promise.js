// ************************************************************************** //
//                                                                            //
//                                                                            //
//   follow.js                                                                //
//                                                        ________            //
//   By: bulliby <wellsguillaume+at+gmail.com>           /   ____/_  _  __    //
//                                                      /    \  _\ \/ \/ /    //
//   Created: 2022/07/04 17:20:11 by bulliby            \     \_\ \     /     //
//   Updated: 2022/07/04 17:46:19 by bulliby             \________/\/\_/      //
//                                                                            //
// ************************************************************************** //

/**
 * Ce fichier m'aide à comprendre le chapitre 11 du livre.
 */

// "Librairie" fournis dans le livre voir : https://github.com/marijnh/Eloquent-JavaScript/blob/master/code/crow-tech.js
const crowTech = require('./crow-tech.js');
const bigOak = crowTech.bigOak;

/** =========================================================================== **/

/**
 * Partie asynchrone seulement avec Callback, on peut obtenir le même résultat
 * que des promesses chainés en fournissant à chaque fonction nécessitant d'être
 * asynchrone un callback
 */

/*
 * On appel la fonction readStorage avec l'argment "food caches"
 * et une arrow function en callback avec le paramtre "caches"
 * et le contenue suivant
 */

bigOak.readStorage("food caches", caches => {
  let firstCache = caches[0];
  // Le callback utilise la recursivité
  bigOak.readStorage(firstCache, info => {
    console.log(info);
  });
});

/**
 * Côté "librairie" (voir crow-tech.js) nous avons la fonction suivante : 
 * La fonction simule un contact externe qui prends du temps, d'ou la nécessité
 * d'effectuer de l'asynchrone.
 */

function readStorage(name, callback) {
    let value = this[$storage][name]
    setTimeout(() => callback(value && JSON.parse(value)), 20)
}

/**
 * Ici nous éffectuons la même chose, pour le même résultat, sans changer la
 * "librairie"...
 */

function storage(nest, name) {
    return new Promise(resolve => {
        nest.readStorage(name, result => resolve(result));
    });
}

storage(bigOak, 'food caches').then((caches) => {
  let firstCache = caches[0];
  storage(crowTech.bigOak, firstCache).then((info) => {
    console.log(info);
  });
});

// Autre exemple
storage(bigOak, "enemies")
  .then(value => console.log("Got", value));
