function formValidate() {
    //mengambil isi dari input
    let inputWeight = parseFloat(document.getElementById("input-weight").value);
    let inputHeight = parseFloat(document.getElementById("input-height").value);
    let hasilElement = document.getElementById("hasil");

    if (isNaN(inputWeight) || isNaN(inputHeight) || inputWeight <= 0 || inputHeight <= 0) {
        alert('Inputan berat badan atau tinggi kosong atau tidak valid.');
    } else {
        // Konversi tinggi dari cm ke meter
        let convertCmToM = inputHeight / 100;
        // Hitung BMI
        let resultHeight = Math.pow(convertCmToM, 2);
        let jumlah = inputWeight / resultHeight;

        // Tentukan kategori BMI
        let message = "";
        if (jumlah < 18.5) {
            message = "Kurus";
        } else if (jumlah >= 18.5 && jumlah < 24.9) {
            message = "Normal";
        } else if (jumlah >= 25 && jumlah < 29.9) {
            message = "Gemuk";
        } else {
            message = "Obesitas";
        }

        // Tampilkan hasil BMI dan pesan
        hasilElement.innerHTML = `BMI kamu adalah ${jumlah.toFixed(2)} - ${message}`;
    }
}

function resetForm() {
    // Mengosongkan form dan hasil BMI
    document.getElementById("input-form").reset();
    document.getElementById("hasil").innerHTML = "";
}
