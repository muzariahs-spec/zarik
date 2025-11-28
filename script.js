let dataEkskul = [];

function tambahEkskul() {
    const nama = document.getElementById("namaEkskul").value;
    const pembina = document.getElementById("pembina").value;

    if (!nama || !pembina) {
        alert("Lengkapi semua data!");
        return;
    }

    dataEkskul.push({ nama, pembina });
    tampilkanData();

    document.getElementById("namaEkskul").value = "";
    document.getElementById("pembina").value = "";
}

function hapusEkskul(index) {
    dataEkskul.splice(index, 1);
    tampilkanData();
}

function tampilkanData() {
    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";

    dataEkskul.forEach((item, i) => {
        tbody.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${item.nama}</td>
                <td>${item.pembina}</td>
                <td><button onclick="hapusEkskul(${i})">Hapus</button></td>
            </tr>
        `;
    });
}
