const API_LINK = "https://api.adviceslip.com/advice";
const adviceId = document.querySelector(".advice-generator__card__advice-id");
const adviceQuote = document.querySelector(".advice-generator__card__advice");
const adviceDice = document.querySelector(".advice-generator__dice");

const fetchNewAdvice = async () => {
    const response = await fetch(API_LINK)
    // console.log(response)
    const advice = await response.json()
    // console.log(data)
    return advice;
    
};

fetchNewAdvice();

// Event Listener for button
window.addEventListener("load", () => {
    adviceDice.addEventListener("click", () => {
        fetchNewAdvice().then((data) => {
            adviceId.textContent = `ADVICE #${data.slip.id}`;
            adviceQuote.textContent = `"${data.slip.advice}"`;
        });
    })
});