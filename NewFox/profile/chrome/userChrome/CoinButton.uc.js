(function () {
    if (typeof CustomizableUI === "undefined") return;

    try {
        CustomizableUI.destroyWidget("coin-button");
    } catch (e) {}

    CustomizableUI.createWidget({
        id: "coin-button",
        type: "custom",
        defaultArea: CustomizableUI.AREA_NAVBAR,

            onBuild(doc) {
                const btn = doc.createXULElement("toolbarbutton");

                btn.id = "coin-button";
                btn.className =
                "toolbarbutton-1 chromeclass-toolbar-additional";

                btn.setAttribute("label", "Coin");
                btn.setAttribute("tooltiptext", "Coin");

                btn.addEventListener("command", () => {
                    Services.prompt.alert(
                        null,
                        "Coin",
                        "Just an animated coin"
                    );
                });

                return btn;
            }
    });
})();
