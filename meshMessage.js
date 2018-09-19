var network = {
  Min: ['William', 'Jayden', 'Omar'],
  William: ['Min', 'Noam'],
  Jayden: ['Min', 'Amelia', 'Ren', 'Noam'],
  Ren: ['Jayden', 'Omar'],
  Amelia: ['Jayden', 'Adam', 'Miguel'],
  Adam: ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
  Miguel: ['Amelia', 'Adam', 'Liam', 'Nathan'],
  Noam: ['Nathan', 'Jayden', 'William'],
  Omar: ['Ren', 'Min', 'Scott'],
};
// ['Jayden', 'Amelia', 'Adam'];

function meshMessage(usr1, usr2) {
  let paths = [];
  function hopper(usr = usr1, i = 1, path = [], visited = {}) {
    path.push(usr);
    visited[usr] = true;
    if (network[usr]) {
      if (network[usr].includes(usr2)) paths.push(path.concat(usr2));

      for (let j = 0; j < network[usr].length; j += 1) {
        if (visited[network[usr][j]]) continue;
        hopper(network[usr][j], i + 1, path, Object.assign(visited, {}));
      }
    }
  }
  hopper();
}
console.log(meshMessage('Jayden', 'Adam'));
