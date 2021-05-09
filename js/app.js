
document.addEventListener('DOMContentLoaded',() => {
    // despatching element
    const newClubForm = document.querySelector('#new-item-form');
      // what are we listening for + what we do when the event fires 
    newClubForm.addEventListener('submit', handleNewFormSubmit); 
});

const handleNewFormSubmit = function (event) {
    event.preventDefault();

    const club = createNewClub(event);
    const yourTeams = document.querySelector('#teams');
    yourTeams.appendChild(club);
    // append new club as child to UL

    event.target.reset();

}

const createNewClub = function (form) {

    //create new club 
    const newClub = document.createElement('li');
    // append newClub with club name
    const clubName = document.createElement('H1');
    clubName.textContent = form.target.clubname.value;
    newClub.appendChild(clubName);
    // append newClub with nation 
    const clubNation = document.createElement('H2');
    clubNation.textContent = form.target.nation.value;
    newClub.appendChild(clubNation);

    return newClub;

}