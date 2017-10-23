var LOKE0019 = {
    init: function () {
        var div = document.createElement("div");
        div.className = "box";
        div.textContent = "LOKE0019";
        document.getElementById("boxes").appendChild(div);
        div.addEventListener("click", click_me);
        div.addEventListener("mouseout", hoverMouse);
        div.addEventListener("mouseover", hoverMouse);


        function click_me(ev) {
            this.style.backgroundColor = "green";
            this.style.borderColor = "brown";
        }

        function hoverMouse(ev) {
            ev.currentTarget.classList.toggle("highlight");
        }

    }
}