
// Mengambil semua menu di sidebar
const menuLinks = document.querySelectorAll(".nav-link");

// Mengambil elemen nama dan kelas
const studentName = document.getElementById("studentName");
const className = document.getElementById("className");

// Mengambil bagian dashboard
const progressPanel = document.getElementById("progressPanel");
const activitiesPanel = document.getElementById("activitiesPanel");
const attachmentsPanel = document.getElementById("attachmentsPanel");

// Menghilangkan semua efek pink
function resetPanelShadow() {
    progressPanel.classList.remove("active-shadow");
    activitiesPanel.classList.remove("active-shadow");
    attachmentsPanel.classList.remove("active-shadow");
}

// Fungsi untuk scroll
function scrollToSection(element) {
    element.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

// Perintah ketika menu diklik
menuLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const selectedMenu = link.dataset.menu;

        // Mengatur menu aktif
        menuLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");

        // Menghilangkan efek sebelumnya
        resetPanelShadow();

        // MENU HOME
        if (selectedMenu === "home") {
            studentName.textContent = "Nama Mahasiswa";
            className.textContent = "Kelas SI-3X";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

        // MENU MAHASISWA
        if (selectedMenu === "mahasiswa") {
            studentName.textContent = "Bunga Harum Dani";

            scrollToSection(studentName);
        }

        // MENU KELAS
        if (selectedMenu === "kelas") {
            className.textContent = "Kelas SI-3E";

            scrollToSection(className);
        }

        // MENU AKTIVITAS
        if (selectedMenu === "aktivitas") {
            progressPanel.classList.add("active-shadow");
            activitiesPanel.classList.add("active-shadow");

            scrollToSection(activitiesPanel);
        }

        // MENU DOKUMEN
        if (selectedMenu === "dokumen") {
            attachmentsPanel.classList.add("active-shadow");

            scrollToSection(attachmentsPanel);
        }

    });

});
