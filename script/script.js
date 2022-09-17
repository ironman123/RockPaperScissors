const choices = ["rock", "paper", "scissors"];

function GetComputerChoice()
{
    let choice = choices[parseInt( Math.random() * 10) % 3];
    return choice;
}