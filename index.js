function superbowlWin(record) {
   for (const info of record){
        if (info.result === "W"){
            return info.year
        }
    }
    // const HHH = record.find(game => game.result === "W")
    // if (HHH) return HHH.year
}

// const LastWonGame = record.find(
//     (element) =>{return element.result == "W"}
//     );

// function superbowlWin(element){
//     return element.result == "W"
// }

