    function getUTMParams() {
        const urlParams = new URLSearchParams(window.location.search);
        return {
        utm_source: urlParams.get("utm_source") || "",
        utm_medium: urlParams.get("utm_medium") || "",
        utm_campaign: urlParams.get("utm_campaign") || "",
        utm_content: urlParams.get("utm_content") || "",
        utm_term: urlParams.get("utm_term") || ""
        };
    }

    document.getElementById("leadForm").addEventListener("submit", function(e) {
        e.preventDefault(); 

        const form = e.target;
        const utms = getUTMParams();

        const data = {
        fullname: form.fullname.value,
        email: form.email.value,
        phone: form.phone.value,
        cidade: form.cidade.value,
        estado: form.estado.value,
        cargo: form.cargo.value,
        submission_date: new Date().toISOString(),
        page_url: window.location.href,
        utm_source: utms.utm_source,
        utm_medium: utms.utm_medium,
        utm_campaign: utms.utm_campaign,
        utm_content: utms.utm_content,
        utm_term: utms.utm_term
        };

        fetch("https://hook.us1.make.celonis.com/0ph4jjf941kkazpp8zk9htdb3grnk7ao", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
        })
        .then(response => {
        if (response.ok) {
            alert("Formulário enviado com sucesso!");
            form.reset();
        } else {
            alert("Erro ao enviar o formulário.");
        }
        })
        .catch(error => {
        console.error("Erro:", error);
        alert("Erro inesperado. Tente novamente.");
        });
    });
