const daftarTeman = [
    { nama: "Alex", username: "@alex123", gambar: "assets/Alex.jpg" },
    { nama: "Brian", username: "@brian123", gambar: "assets/Brian.jpg" },
    { nama: "Daniel", username: "@daniel123", gambar: "assets/Daniel.jpg" },
    { nama: "Evan", username: "@evan123", gambar: "assets/Evan.jpg" },
    { nama: "John", username: "@john123", gambar: "assets/John.jpg" },
];

const daftarTemanTersimpan = [];

function tampilkanDaftarTeman() {
    const daftarTemanElem = document.getElementById("daftar-teman");
    daftarTemanElem.innerHTML = "";

    daftarTeman.forEach(teman => {
        const div = document.createElement("div");

        if (teman.gambar) {
            const img = document.createElement("img");
            img.src = teman.gambar;
            img.alt = teman.nama;
            div.appendChild(img);
        }

        const addH4 = document.createElement("h4");
        addH4.textContent = teman.nama;
        div.appendChild(addH4);

        const addP = document.createElement("p");
        addP.textContent = teman.username;
        div.appendChild(addP);

        const addButton = document.createElement("button");
        addButton.textContent = "Follow";
        addButton.classList.add("button-follow");
        addButton.addEventListener("click", () => tambahkanTeman(teman, addButton));
        div.appendChild(addButton);

        daftarTemanElem.appendChild(div);
    });

    updateJumlahDaftar("jumlah-teman", daftarTeman.length);
}

function tampilkanTemanTersimpan() {
    const temanTersimpanElem = document.getElementById("teman-tersimpan");
    temanTersimpanElem.innerHTML = "";

    daftarTemanTersimpan.forEach(teman => {
        const div_main = document.createElement("div");
        div_main.classList.add("teman-main");

        if (teman.gambar) {
            const div_gambar = document.createElement("div");
            div_gambar.classList.add("teman-gambar");
            const img = document.createElement("img");
            img.src = teman.gambar;
            img.alt = teman.nama;

            div_gambar.appendChild(img);
            div_main.appendChild(div_gambar);
        }

        const div_text = document.createElement("div");
        div_text.classList.add("teman-text");

        const addH4 = document.createElement("h4");
        addH4.textContent = teman.nama;
        div_text.appendChild(addH4);

        const addP = document.createElement("p");
        addP.textContent = teman.username;
        div_text.appendChild(addP);

        div_main.appendChild(div_text);

        const div_delete_button = document.createElement("div");
        div_delete_button.classList.add("teman-delete-button");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Unfollow";
        deleteButton.classList.add("button-unfollow");
        deleteButton.addEventListener("click", () => hapusTeman(teman, deleteButton));
        div_delete_button.appendChild(deleteButton);
        div_main.appendChild(div_delete_button);

        temanTersimpanElem.appendChild(div_main);
    });

    updateJumlahDaftar("jumlah-teman-tersimpan", daftarTemanTersimpan.length);
}

function tambahkanTeman(teman, button) {
    daftarTemanTersimpan.push(teman);
    const index = daftarTeman.findIndex(item => item.nama === teman.nama);
    if (index !== -1) {
        daftarTeman.splice(index, 1);
    }

    tampilkanDaftarTeman();
    tampilkanTemanTersimpan();

    button.textContent = "Unfollow";
    button.classList.remove("button-follow");
    button.classList.add("button-unfollow");
}

function hapusTeman(teman, button) {
    daftarTeman.push(teman);
    const index = daftarTemanTersimpan.findIndex(item => item.nama === teman.nama);
    if (index !== -1) {
        daftarTemanTersimpan.splice(index, 1);
    }

    tampilkanDaftarTeman();
    tampilkanTemanTersimpan();

    button.textContent = "Follow";
    button.classList.remove("button-unfollow");
    button.classList.add("button-follow");
}

function updateJumlahDaftar(namaElem, jumlah) {
    const elem = document.getElementById(namaElem);
    elem.textContent = `(${jumlah})`;
}

tampilkanDaftarTeman();
tampilkanTemanTersimpan();