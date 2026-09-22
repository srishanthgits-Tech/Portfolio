function openModal() {
    document.getElementById("projectModal").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
    document.body.style.overflow = "auto";
}

function openFeedbackModal() {
    document.getElementById("feedbackModal").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeFeedbackModal() {
    document.getElementById("feedbackModal").style.display = "none";
    document.body.style.overflow = "auto";
}

function openCampaignModal() {
    document.getElementById("campaignModal").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeCampaignModal() {
    document.getElementById("campaignModal").style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {

    const projectModal =
        document.getElementById("projectModal");

    const feedbackModal =
        document.getElementById("feedbackModal");

    const campaignModal =
        document.getElementById("campaignModal");

    if (event.target === projectModal) {
        closeModal();
    }

    if (event.target === feedbackModal) {
        closeFeedbackModal();
    }

    if (event.target === campaignModal) {
        closeCampaignModal();
    }
}
function showCertificate(id){

    const image = document.getElementById("certificateImage");
    const title = document.getElementById("certificateTitle");
    const description = document.getElementById("certificateDescription");

    if(id == 1){

        image.src = "Google cloud certificate_page-0001.jpg";

        title.innerHTML = "Google Data Analytics";

        description.innerHTML =
        "Completed Google Cloud Career Launchpad Data Analytics Track covering SQL, Data Analytics, Data Visualization, Business Intelligence and Cloud Technologies.";
    }

    else if(id == 2){

        image.src = "Forage DA_page-0001.jpg";

        title.innerHTML = "TATA GenAI Powered Data Analytics";

        description.innerHTML =
        "Industry-focused certification from Tata Group covering Generative AI applications in data analytics, business intelligence, KPI measurement, dashboard creation, insight generation and data-driven decision making.";
    }

    else if(id == 3){

        image.src = "AI  cource certificate_page-0001 (1).jpg";

        title.innerHTML = "Infosys AI";

        description.innerHTML =
        "Artificial Intelligence, Machine Learning fundamentals and practical AI applications.";
    }

    else if(id == 4){

        image.src = "Product Manager certificate_page-0001.jpg";

        title.innerHTML = "Product Management";

        description.innerHTML =
        "Product strategy, roadmap planning, user research and product lifecycle management.";
    }
}
/* =====================================================
   VIEW PROJECTS - CAR ANIMATION
===================================================== */

function initProjectDriveAnimation() {

    const viewProjectsButton =
        document.querySelector(".hero-btn.primary-btn");

    const projectDrive =
        document.getElementById("projectDrive");

    const driveProjects =
        document.getElementById("driveProjects");

    const projectsSection =
        document.getElementById("projects");


    /* Check if everything exists */
    if (
        !viewProjectsButton ||
        !projectDrive ||
        !driveProjects ||
        !projectsSection
    ) {

        console.log("❌ Project animation elements missing");

        console.log("Button:", viewProjectsButton);
        console.log("Overlay:", projectDrive);
        console.log("Drive Projects:", driveProjects);
        console.log("Projects Section:", projectsSection);

        return;
    }


    console.log("✅ Project animation initialized");


    viewProjectsButton.addEventListener("click", function (event) {

        /* STOP href="#projects" */
        event.preventDefault();
        event.stopPropagation();


        console.log("🚗 PROJECT ANIMATION STARTED");


        /* Prevent double click */
        if (projectDrive.classList.contains("active")) {
            return;
        }


        /* ==========================================
           GET ORIGINAL PROJECT CARDS
        ========================================== */

        const originalCards =
            projectsSection.querySelectorAll(".project-card");


        /* Clear previous animation cards */
        driveProjects.innerHTML = "";


        /* ==========================================
           CREATE CLONES
        ========================================== */

        originalCards.forEach(function (card) {

            const clone = card.cloneNode(true);

            /*
             * Remove original onclick events
             * so animation cards don't open modals.
             */
            clone.removeAttribute("onclick");

            driveProjects.appendChild(clone);

        });


        /* ==========================================
           START CAR ANIMATION
        ========================================== */

        projectDrive.classList.add("active");


        /* ==========================================
           SHOW REAL PROJECT SECTION
        ========================================== */

        setTimeout(function () {

            projectsSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 2450);


        /* ==========================================
           END ANIMATION
        ========================================== */

        setTimeout(function () {

            projectDrive.classList.remove("active");

            driveProjects.innerHTML = "";

        }, 3400);

    });
}


/* ==========================================
   INITIALIZE AFTER HTML LOAD
========================================== */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initProjectDriveAnimation
    );

} else {

    initProjectDriveAnimation();

}

/* =====================================================
   NAVBAR ACTIVE SECTION
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll("nav ul a");

    const sections = document.querySelectorAll(
        "#home, #about, #skills, #projects, #experience, #contact"
    );


    /* ---------------------------------------------
       CLICK — CHANGE ACTIVE LINK IMMEDIATELY
    --------------------------------------------- */

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    /* ---------------------------------------------
       SCROLL — AUTOMATICALLY UPDATE ACTIVE LINK
    --------------------------------------------- */

    function updateActiveNav() {

        const scrollPosition =
            window.scrollY + 180;

        let currentSection = "home";


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            const target =
                link.getAttribute("href");

            if (target === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    }


    /* ---------------------------------------------
       RUN WHEN SCROLLING
    --------------------------------------------- */

    window.addEventListener(
        "scroll",
        updateActiveNav
    );


    /* ---------------------------------------------
       RUN ON PAGE LOAD
    --------------------------------------------- */

    updateActiveNav();

});