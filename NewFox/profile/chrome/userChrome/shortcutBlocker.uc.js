(function () {
    window.addEventListener(
        "keydown",
        function (e) {
            const key = e.key.toLowerCase();

            // Ctrl + Alt + [Z,X]
            if (e.ctrlKey && e.altKey && !e.shiftKey && ["z", "x"].includes(key)) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }

            // Ctrl + Shift + B
            if (e.ctrlKey && e.shiftKey && !e.altKey && key === "b") {
                e.preventDefault();
                e.stopPropagation();
                return;
            }

            // Shift + Alt + [T,H,F,S,E,V]
            if (e.shiftKey && e.altKey && !e.ctrlKey && ["t","h","f","s","e","v"].includes(key)) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }

            // Alt + [T,H,F,S,E,V]
            if (e.altKey && !e.ctrlKey && !e.shiftKey && ["t","h","f","s","e","v"].includes(key)) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }

            // Alt itself
            if (e.key === "Alt") {
                e.preventDefault();
                e.stopPropagation();
                return;
            }

        },
        true
    );
})();
