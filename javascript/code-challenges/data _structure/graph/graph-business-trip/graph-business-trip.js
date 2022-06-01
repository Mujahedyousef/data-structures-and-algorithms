

function businessTrip(graph, city) {
    
        let price = 0;
        for (let i = 0; i < city.length; i++) {
          let neighbors = graph.getNeighbors(city[i]);
          for (let j = 0; j < neighbors.length; j++) {
            (neighbors[j].vertex === city[i + 1])?price=price+ neighbors[j].weight:price=price;
          }
        }
        if (price === 0) {
          return null;
        }
        return price;
      }

  

module.exports = businessTrip;