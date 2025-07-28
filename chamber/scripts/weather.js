const currentTemp = document.querySelector('#weatherForecast');
const forecastOutputDiv = document.querySelector('#forecast-output');

// const url = 'https://api.openweathermap.org/data/2.5/forecast/daily?lat=4.85&lon=6.98&cnt=3&units=metric&appid=d81abeeb8f94b6be8dcda7a4d5a865c1';

const url = 'https://api.openweathermap.org/data/3.0/onecall?lat=4.85&lon=6.98&exclude=current,minutely,hourly,alerts&units=metric&appid=f80353471d3944737ed4353d873bf034';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();
function displayResults(data) {
    let forecastHTML = '';
    const dailyForecasts = data.daily.slice(0, 3);

    if (dailyForecasts.length === 0) {
      forecastOutputDiv.innerHTML = '<p>No forecasta data available.</p>';
      return;
    }

  dailyForecasts.forEach(dayData => {
      const timestamp = dayData.dt;
      const date = new Date(timestamp * 1000);

      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = date.toLocaleDateString('en-US', options);

      const minTemp = dayData.temp.min;
      const maxTemp = dayData.temp.max;
      const condition = dayData.summary;
      const iconCode = dayData.weather[0].icon;
      const description = dayData.weather[0].description;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

      let card = document.createElement('section');
      let wIcon = document.createElement('img');
      let day = document.createElement('h3');
      let mTemp = document.createElement('p');
      let mxTemp = document.createElement('p');
      let desc = document.createElement('p');
      let cond = document.createElement('p');

      wIcon.setAttribute('src', iconUrl);
      wIcon.setAttribute('alt', 'current weather');
      day.textContent = `${formattedDate}`;
      mTemp.textContent = `Min Temperature: ${minTemp}`;
      mxTemp.textContent = `Max Temperature: ${maxTemp}`;
      cond.textContent = `${condition}`
      desc.textContent = `${description}`;

      cond.style.fontWeight= 'bold';

      card.appendChild(wIcon);
      card.appendChild(day);
      card.appendChild(mTemp);
      card.appendChild(mxTemp);
      card.appendChild(cond);

      currentTemp.appendChild(card);

  });

    forecastOutputDiv.innerHTML = forecastHTML;
  
}


