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
    let pesanHasil;

    if (hbBerat) {

        statusRisiko = "High Risk";

        pesanHasil =
            "Kadar Hb yang dilaporkan berada di bawah 8,0 g/dL. " +
            "Hasil skrining ditetapkan sebagai risiko tinggi dan " +
            "sebaiknya segera dikonsultasikan kepada tenaga kesehatan.";

    }

    else if (totalSkor <= 16) {

        statusRisiko = "Low Risk";

        pesanHasil =
            "Berdasarkan skor skrining, tingkat risiko berada pada kategori rendah. " +
            "Tetap perhatikan pola makan, konsumsi zat besi, dan kesehatan secara umum.";

    }

    else if (totalSkor <= 35) {

        statusRisiko = "Moderate Risk";

        pesanHasil =
            "Berdasarkan skor skrining, terdapat beberapa faktor yang " +
            "berkaitan dengan risiko anemia. Pertimbangkan untuk berkonsultasi " +
            "dengan tenaga kesehatan, terutama jika terdapat keluhan atau gejala.";

    }

    else {

        statusRisiko = "High Risk";

        pesanHasil =
            "Berdasarkan skor skrining, terdapat risiko tinggi. " +
            "Disarankan untuk berkonsultasi dengan tenaga kesehatan dan " +
            "mempertimbangkan pemeriksaan Hb untuk mendapatkan penilaian yang lebih akurat.";
    }


    document.getElementById("totalSkor").textContent = totalSkor;

    document.getElementById("statusRisiko").textContent = statusRisiko;

    document.getElementById("pesanHasil").textContent = pesanHasil;

    document.getElementById("hasil").hidden = false;


    // Scroll ke hasil
    document.getElementById("hasil").scrollIntoView({
        behavior: "smooth"
    });
});