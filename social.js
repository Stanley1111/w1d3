var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// Pick a few of the following tasks and write functions to solve them:

//     List everyone and for each of them, list the names of who they follow and who follows them
//     Identify who follows the most people
//     Identify who has the most followers
//     Identify who has the most followers over 30
//     Identify who follows the most people over 30
//     List those who follow someone that doesn't follow them back
//     List everyone and their reach (sum of # of followers and # of followers of followers)

function listAll(){
  //iterate thru data and print name of each user
  for(var i in data){
    var userID = i;
    var username = data[i].name;
    console.log(username, userID);

    //list the ppl that the user follows
    var followerIDs = data[i].follows;
    var followerNames = [];
    for(var j = 0; j < followerIDs.length; j++){
      followerNames.push(data[followerIDs[j]].name);
    }
    console.log(username + " follows:" + followerNames);

    //list the ppl that follow the user
    var following = [];
    for(var x in data){
      //console.log(data[x].follows);
      if(data[x].follows.lastIndexOf(userID) >= 0){
        following.push(data[x].name);
      }
    }
    console.log("Ppl that follow the user:", following);
    console.log();
  }



}

listAll();