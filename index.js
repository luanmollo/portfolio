<script>
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        var form = e.target;
        var formData = new FormData(form);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", form.action, true);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                alert("Mensaje enviado con éxito");
            } else {
                alert("Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.");
            }
        };
        xhr.send(formData);
    });
</script>
