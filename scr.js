const responseInput = document.getElementById('response');
const submitButton = document.querySelector('button[type="submit"]');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const response = responseInput.value.trim().toLowerCase();

  if (response === 'yes') {
    // Poem time!
    document.body.innerHTML = `
      <h1>Yay! You said yes!</h1>
      <p>Roses are red, violets are blue,</p>
      <p>I'm so happy, I'm thinking of you.</p>
      <p>You make my heart skip a beat,</p>
      <p>I'm so lucky to have you sweet.</p>
    `;
  } else if (response === 'no') {
    // Ask if she's sure
    document.body.innerHTML = `
      <h1>Aww, okay...</h1>
      <p>Are you sure?</p>
      <form>
        <input type="text" id="response" />
        <button type="submit">Submit</button>
      </form>
    `;

    // Create a loop to ask if she's sure
    const sureResponseInput = document.getElementById('response');
    const sureSubmitButton = document.querySelector('button[type="submit"]');

    sureSubmitButton.addEventListener('click', (e) => {
      e.preventDefault();
      const sureResponse = sureResponseInput.value.trim().toLowerCase();

      if (sureResponse === 'yes') {
        // Keep asking if she's sure
        document.body.innerHTML = `
          <h1>Are you really sure?</h1>
          <p>Think carefully...</p>
          <form>
            <input type="text" id="response" />
            <button type="submit">Submit</button>
          </form>
        `;
      } else if (sureResponse === 'no') {
        // Finally, accept her decision
        document.body.innerHTML = `
          <h1>Okay, I understand.</h1>
          <p>I'll always cherish the memories we've shared.</p>
        `;
      }
    });
  }
});