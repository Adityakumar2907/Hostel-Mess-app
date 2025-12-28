const menu = {
    Monday: {
        morning: "Idli & Sambar",
        afternoon: "Rice, Dal, Veg Curry",
        evening: "Tea & Biscuits",
        night: "Chapati & Paneer"
    },
    Tuesday: {
        morning: "Poha",
        afternoon: "Rice, Sambar",
        evening: "Coffee & Snacks",
        night: "Fried Rice"
    },
    Wednesday: {
        morning: "Dosa",
        afternoon: "Rice, Dal Fry",
        evening: "Milk & Bread",
        night: "Chapati & Kurma"
    },
    Thursday: {
        morning: "Upma",
        afternoon: "Veg Biryani",
        evening: "Tea & Pakoda",
        night: "Rice & Rasam"
    },
    Friday: {
        morning: "Pongal",
        afternoon: "Rice, Curry",
        evening: "Juice",
        night: "Noodles"
    },
    Saturday: {
        morning: "Paratha",
        afternoon: "Special Meal",
        evening: "Snacks",
        night: "Chapati & Curry"
    },
    Sunday: {
        morning: "Poori",
        afternoon: "Chicken/Veg Meal",
        evening: "Ice Cream",
        night: "Light Dinner"
    }
};

function showMenu() {
    const day = document.getElementById("daySelect").value;
    if (day === "") return;

    document.getElementById("morning").innerText = menu[day].morning;
    document.getElementById("afternoon").innerText = menu[day].afternoon;
    document.getElementById("evening").innerText = menu[day].evening;
    document.getElementById("night").innerText = menu[day].night;
}

function showFeedback() {
    document.getElementById("feedbackSection").style.display = "block";
}

function submitFeedback() {
    const feedback = document.getElementById("feedback").value;
    if (feedback === "") {
        alert("Please enter feedback");
    } else {
        alert("Thank you for your feedback!");
        document.getElementById("feedback").value = "";
    }
}
