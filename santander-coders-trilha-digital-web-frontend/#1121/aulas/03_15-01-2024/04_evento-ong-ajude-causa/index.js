async function loadParams() {
  const dados = document.querySelector('.results');

  const urlParams = new URLSearchParams(window.location.search);
  const dataObject = {};
  for (const [key, value] of urlParams.entries()) {
    dataObject[key] = value;
  }

  console.log(Object.keys(dataObject).length, 'params');

  // Empty params
  if (!Object.keys(dataObject).length) {
    dados.insertAdjacentHTML(
      'beforeend',
      `<p style="text-align: center; color: var(--secondary);">Não foram encontradas informações sobre esta doação.<br/> Tente novamente.</p>`
    );
    return;
  }

  // URL of the JSON server endpoint
  const url = 'http://localhost:3000/registrations';

  // Options for the Fetch API
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataObject),
  };

  // Send the POST request to the JSON server
  await fetch(url, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      console.log('Data sent successfully:', data);
    })
    .catch((error) => {
      console.error('Error sending data:', error);
    });

  // Populate HTML element
  for (const [key, value] of Object.entries(dataObject)) {
    console.log(key, value);
    dados.insertAdjacentHTML(
      'beforeend',
      `<div><strong>${key}:</strong> <span>${value}</span></div>`
    );
  }
}
