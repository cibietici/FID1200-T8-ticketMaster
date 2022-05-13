//registere hos https://developer-acct.ticketmaster.com/
// for å få muligheten å lager apper og få en cunsumer key
const tmKey = 'yourconsumerkey';

async function getEvents() {
    // kan sendes flere byer enn Oslo samtidig
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?city=[Oslo]&apikey=${tmKey}`;
    const response = await fetch(url);
    const results = await response.json();

    const events = results._embedded.events;


    events.forEach(event => {
        const container = document.getElementById('app');
        console.log(event)
        const pEl = document.createElement('p');
        pEl.textContent = event.name;
        container.append(pEl)
    });
}

getEvents();
