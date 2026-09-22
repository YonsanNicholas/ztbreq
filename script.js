const form = document.getElementById("anemiaForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let totalSkor = 0;

    const hbOption = document.querySelector(
        'input[name="q1"]:checked'
    );

    const hbBerat = hbOption.dataset.hb === "berat";

    for (let i = 1; i <= 27; i++) {
        const jawaban = document.querySelector(
            `input[name="q${i}"]:checked`
        );

        if (jawaban) {
            totalSkor += Number(jawaban.value);
        }
    }

    let statusRisiko;

    if (hbBerat) {
        statusRisiko = "High Risk";
    } else if (totalSkor <= 16) {
        statusRisiko = "Low Risk";
    } else if (totalSkor <= 35) {
        statusRisiko = "Moderate Risk";
    } else {
        statusRisiko = "High Risk";
    }

    document.getElementById("totalSkor").textContent = totalSkor;
    document.getElementById("statusRisiko").textContent = statusRisiko;
    document.getElementById("hasil").hidden = false;

    document.getElementById("hasil").scrollIntoView({
        behavior: "smooth"
    });
});
