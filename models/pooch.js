pooches = [];

pooches.push({
  id: 1,
  name: 'Alexandria',
  image: '/images/alexandria.jpg',
  donations: 0
});

pooches.push({
  id: 2,
  name: 'Angel',
  image: '/images/angel.jpg',
  donations: 0
});

pooches.push({
  id: 3,
  name: 'Annie',
  image: '/images/annie.jpg',
  donations: 0
});

pooches.push({
  id: 4,
  name: 'Autumn',
  image: '/images/autumn.jpg',
  donations: 0
});

pooches.push({
  id: 5,
  name: 'Bella',
  image: '/images/bella.jpg',
  donations: 0
});

pooches.push({
  id: 6,
  name: 'Bess',
  image: '/images/bess.jpg',
  donations: 0
});

pooches.push({
  id: 7,
  name: 'Blanche',
  image: '/images/blanche.jpg',
  donations: 0
});

pooches.push({
  id: 8,
  name: 'Casey',
  image: '/images/casey.jpg',
  donations: 0
});

pooches.push({
  id: 9,
  name: 'Chessie',
  image: '/images/chessie.jpg',
  donations: 0
});

pooches.push({
  id: 10,
  name: 'Ella',
  image: '/images/ella.jpg',
  donations: 0
});

pooches.push({
  id: 11,
  name: 'Elza_and_norris',
  image: '/images/elza_and_norris.jpg',
  donations: 0
});

pooches.push({
  id: 12,
  name: 'Faithful',
  image: '/images/faithful.jpg',
  donations: 0
});

pooches.push({
  id: 13,
  name: 'Halemma',
  image: '/images/halemma.jpg',
  donations: 0
});

pooches.push({
  id: 14,
  name: 'Hopely',
  image: '/images/hopely.jpg',
  donations: 0
});

pooches.push({
  id: 15,
  name: 'Kai',
  image: '/images/kai.jpg',
  donations: 0
});

pooches.push({
  id: 16,
  name: 'Lilah',
  image: '/images/lilah.jpg',
  donations: 0
});

pooches.push({
  id: 17,
  name: 'Lina',
  image: '/images/lina.jpg',
  donations: 0
});

pooches.push({
  id: 18,
  name: 'Millie',
  image: '/images/millie.jpg',
  donations: 0
});

pooches.push({
  id: 19,
  name: 'Olivian',
  image: '/images/olivian.jpg',
  donations: 0
});

pooches.push({
  id: 20,
  name: 'Oreo',
  image: '/images/oreo.jpg',
  donations: 0
});

pooches.push({
  id: 21,
  name: 'Paisley',
  image: '/images/paisley.jpg',
  donations: 0
});

pooches.push({
  id: 22,
  name: 'Pam',
  image: '/images/pam.jpg',
  donations: 0
});

pooches.push({
  id: 23,
  name: 'Peppa',
  image: '/images/peppa.jpg',
  donations: 0
});

pooches.push({
  id: 24,
  name: 'Pritchett',
  image: '/images/pritchett.jpg',
  donations: 0
});

pooches.push({
  id: 25,
  name: 'Sage',
  image: '/images/sage.jpg',
  donations: 0
});

pooches.push({
  id: 26,
  name: 'Shayla',
  image: '/images/shayla.jpg',
  donations: 0
});

pooches.push({
  id: 27,
  name: 'Sky',
  image: '/images/sky.jpg',
  donations: 0
});

pooches.push({
  id: 28,
  name: 'Teal',
  image: '/images/teal.jpg',
  donations: 0
});

pooches.push({
  id: 29,
  name: 'Tessie',
  image: '/images/tessie.jpg',
  donations: 0
});

pooches.push({
  id: 30,
  name: 'Tica',
  image: '/images/tica.jpg',
  donations: 0
});

pooches.push({
  id: 31,
  name: 'Tinkerbell',
  image: '/images/tinkerbell.jpg',
  donations: 0
});

pooches.push({
  id: 32,
  name: 'Trinity',
  image: '/images/trinity.jpg',
  donations: 0
});

exports.all = function() {
  return pooches;
};

exports.find = function(id) {
  for (var i=0;i<pooches.length; i++) {
    if (pooches[i].id == id) {
      return pooches[i];
    }
  }
  return null;
};

exports.incrementDonation = function(dog_id, amount) {
  var dog = exports.find(dog_id);
  var int_amount = parseInt(amount);
  console.log("------------");
  console.log(amount);
  console.log("------------");

  if(dog && !isNaN(int_amount)) {
    dog.donations += int_amount;
  }

};

