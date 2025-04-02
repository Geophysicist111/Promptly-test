function navigate(pageId) {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("excuse").classList.add("hidden");
    document.getElementById("compliment").classList.add("hidden");
    document.getElementById("gift").classList.add("hidden");
    document.getElementById(pageId).classList.remove("hidden");
}

function generateExcuse() {
    const excuses = [
        "My dog ate my homework!",
        "The traffic was terrible.",
        "I lost track of time.",
        "My internet went down.",
        "I had a family emergency."
    ];
    const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
    document.getElementById("excuse-output").innerText = randomExcuse;
}

function generateCompliment() {
    const compliments = [
        "You're amazing just the way you are!",
        "Your smile lights up the room.",
        "You're incredibly talented.",
        "You have a great sense of humor.",
        "You're a wonderful person!"
    ];
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    document.getElementById("compliment-output").innerText = randomCompliment;
}

function generateGift() {
    const gifts = [
        "A personalized mug",
        "A digital gift card",
        "A handwritten letter",
        "A surprise subscription box",
        "Homemade cookies"
    ];
    const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
    document.getElementById("gift-output").innerText = randomGift;
}