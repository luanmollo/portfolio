function autoScroll() {
    const container = document.getElementById('scroll-container');
    const list = document.getElementById('scroll-list');
    let scrollTop = 0;
    let isScrollingDown = true;

    setInterval(() => {
        if (isScrollingDown) {
            scrollTop += 1; // Ajusta esta cantidad para controlar la velocidad del desplazamiento
            if (scrollTop >= list.scrollHeight - container.clientHeight) {
                isScrollingDown = false;
            }
        } else {
            scrollTop -= 1;
            if (scrollTop <= 0) {
                isScrollingDown = true;
            }
        }
        container.scrollTop = scrollTop;
    }, 50); // Ajusta el intervalo para controlar la suavidad del desplazamiento
}

window.onload = autoScroll;