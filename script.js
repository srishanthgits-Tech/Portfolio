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