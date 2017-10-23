var LOKE0019 = {
    init: function () {
        console.log("script in LOKE0019 called");
        var div = document.createElement("div");

        div.className = "box";
        div.textContent = "LOKE0019";

        document.getElementById("boxes").appendChild(div);

        div.addEventListener("click", click_me);
        div.addEventListener("mouseout", hoverMouse);
        div.addEventListener("mouseover", hoverMouse);


        function hoverMouse(ev) {
            this.classList.toggle("highlight");
        }

        function click_me(ev) {
            this.style.backgroundColor = "pink";
            this.style.borderColor = "green";
        }
    }

}