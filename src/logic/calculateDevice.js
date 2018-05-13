import _ from 'lodash'
export default function calculateDevice(links, locations) {
  const linkStations = [];
  const locationList = [];
  readInput(links, locations);

  function readInput(linkList, location) {
    _.each(linkList, function(link){
       var station = {x:link[0], y:link[1], reach:link[2]};
         linkStations.push(station);
    });
    _.each(location, function(loc) {
       var cords = {x:loc[0], y:loc[1]};
       locationList.push(cords);
    });
  }

  function createPower(distance, item) {
    var power = 0;
    if (distance < item.reach) {
      power = (item.reach - distance)^2;
    }
    return power;
  }

  function calculateDistance(listOfLinkStations, comparisonPoint) {
    _.each(listOfLinkStations, function(item) {
      var distance = Math.sqrt((item.x - comparisonPoint.x)^2 + (item.y - comparisonPoint.y)^2);
      _.extend(item, {power: createPower(distance, item)});
    }); 
    return listOfLinkStations;
  }
    
  function findOptimal(listOfLinkStations) {
    var optimal = _.maxBy(listOfLinkStations, function(item) {
        return item.power;
    });
    return optimal;
  }

  function getLinkStation(linkStations, locationList) {
      _.each(locationList, function(location) {
          _.extend(location, { linkStation: findOptimal(calculateDistance(linkStations, location))});
      });
      return locationList;
  }
  return getLinkStation(linkStations, locationList);
}
