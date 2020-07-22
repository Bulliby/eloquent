// ************************************************************************** //
//                                                                            //
//                                                                            //
//   compare.js                                                               //
//                                                        ________            //
//   By: bulliby <wellsguillaume+at+gmail.com>           /   ____/_  _  __    //
//                                                      /    \  _\ \/ \/ /    //
//   Created: 2020/07/18 17:34:09 by bulliby            \     \_\ \     /     //
//   Updated: 2020/07/19 14:55:39 by bulliby             \________/\/\_/      //
//                                                                            //
// ************************************************************************** //

var roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
];

function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

var roadGraph = buildGraph(roads);

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
}

var mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
    if (memory.length == 0) {
        memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)};
}

var VillageState = class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                return {place: destination, address: p.address};
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}

VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
};

function runRobot(state, robot, memory) {
    //console.log(state.parcels);
    let turn = 0;
    for (;; turn++) {
        if (state.parcels.length == 0) {
            //console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        //console.log(`Moved to ${action.direction}`);
    }

    return turn;
}

function findRoute(graph, from, to) {
    //console.log("TO", to);
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++) {
        let {at, route} = work[i];
        //console.log("AT", at);
        for (let place of graph[at]) {
            if (place == to) {
                let r = route.concat(place);
                //console.log("ROUTE", r);
                return r;
            }
            if (!work.some(w => w.at == place)) {
                work.push({at: place, route: route.concat(place)});
            }
        }
        //console.log(work);
    }
}

function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return {direction: route[0], memory: route.slice(1)};
}

function augmentedOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
        let parcel = getParcel(parcels, place, parcels.filter((parcel) => {
            return parcel.place != place;
        }).length);
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return {direction: route[0], memory: route.slice(1)};
}

function getParcel(parcels, place, source) {
    return parcels.reduce((acc, cur) => {
        let route1 = findRoute(roadGraph, place, ((source) ? acc.place : acc.address));
        let route2 = findRoute(roadGraph, place, ((source) ? cur.place : cur.address));
        return (route1.length > route2.length) ? cur : acc;
    });
}

function compareRobots(robot1, robot2) {
    let randomState = VillageState.random();
    let turnsRobot1 = 0;
    let turnsRobot2 = 0;

    for (let i = 0; i != 100; i++) {
        turnsRobot1 += runRobot(randomState, robot1, []);
        turnsRobot2 += runRobot(randomState, robot2,[]);
    }
    
    console.log(`Robot1 do it in an average of ${turnsRobot1 / 100} turns`);
    console.log(`Robot2 do it in an average of ${turnsRobot2 / 100} turns`);
}

//runRobot(VillageState.random(), routeRobot, []);
//runRobot(VillageState.random(), goalOrientedRobot,[]);
compareRobots(augmentedOrientedRobot, goalOrientedRobot);
//runRobot(VillageState.random(), augmentedOrientedRobot,[]);
