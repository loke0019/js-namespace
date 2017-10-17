var LOKE0019 = {
    init: function () {
        var loki = document.createElement("div");
        box.className = "box";
        loki.textContent = "LOKE0019";
        document.getElementById("boxes").appendChild(loki);
        loki.addEventListener("click", clickMe);
        loki.addEventListener("mouseout", hoverMouse);
        loki.addEventListener("mouseover", hoverMouse);

        function hoverMouse(ev) {
            this.classList.toggle("highlight");
        }

        function clickMe(ev) {
            this.style.backgroundColor = "green";
            this.style.borderColor = "darkgreen";
        }
    }
}