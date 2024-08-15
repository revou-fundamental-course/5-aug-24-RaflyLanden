function formValidate() {
    //mengambil isi dari input
    let inputWeight = parseFloat(document.getElementById("input-weight").value);
    let inputHeight = parseFloat(document.getElementById("input-height").value);
    let hasilElement = document.getElementById("hasil");

    //melihat input sudah terisi atau belum
    if (isNaN(inputWeight) || isNaN(inputHeight) || inputWeight <= 0 || inputHeight <= 0) {
        alert('Inputan berat badan atau tinggi kosong atau tidak valid.');
    } else {
        // Konversi tinggi dari cm ke meter
        let convertCmToM = inputHeight / 100;
        // Hitung BMI
        let resultHeight = Math.pow(convertCmToM, 2);
        let jumlah = inputWeight / resultHeight;

        // Menentukan kategori BMI
        let message = "";
        if (jumlah < 18.5) {
            message = "Kekurangan berat badan";
        } else if (jumlah >= 18.5 && jumlah < 24.9) {
            message = "Normal (ideal)";
        } else if (jumlah >= 25 && jumlah < 29.9) {
            message = "Kelebihan berat badan";
        } else {
            message = "Kegemukan (Obesitas)";
        }

        // Tampilkan hasil BMI dan pesan
        hasilElement.innerHTML = `BMI kamu adalah ${jumlah.toFixed(2)} = ${message}`;
    }
}

function resetForm() {
    // Mengosongkan form dan hasil BMI
    document.getElementById("input-form").reset();
    document.getElementById("hasil").innerHTML = "";
}
