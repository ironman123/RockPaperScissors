const choices = ["rock", "paper", "scissors"];

function GetComputerChoice()
{
    return choices[parseInt( Math.random() * 10) % 3];
}

function PlayRound(playerChoice, computerChoice)
{
    let compPlace = choices.findIndex((element)=> element == computerChoice);
    let plarPlace = choices.findIndex((element)=> element == playerChoice);

    if((compPlace == 0 && plarPlace == 2) || (plarPlace == 0 && compPlace == 2))
    {
        let winner = (compPlace < plarPlace) ? "Computer" : "Player";
        console.log(`Computer Chose: ${computerChoice}`);
        console.log(`Player Chose: ${playerChoice}`);
        console.log(`${winner} won the Round!!!`);
    }
    else if(compPlace == plarPlace)
    {
        console.log(`Computer Chose: ${computerChoice}`);
        console.log(`Player Chose: ${playerChoice}`);
        console.log(`!!!--- It's a Tie ---!!!`);
    }
    else
    {
        let winner = (compPlace > plarPlace) ? "Computer" : "Player";
        console.log(`Computer Chose: ${computerChoice}`);
        console.log(`Player Chose: ${playerChoice}`);
        console.log(`${winner} won the Round!!!`);
    }
}

for (let index = 0; index < 10; index++) 
{
    let player = "null";

    let index = -1;
    

    do
    {
        player = (prompt("Enter your Choice: ")).toLowerCase();
        index = choices.findIndex((element)=> element === player);
        console.log(index);

        if(index <= -1)
        {
            console.log("Enter a valid Choice AssHole!!!!!!!!!!");
        }
    }while(index <= -1);

    PlayRound(player,GetComputerChoice());
}