(function () {
    if (typeof CustomizableUI === "undefined") return;

    try {
        CustomizableUI.destroyWidget("chest-button");
    } catch (e) {}

    CustomizableUI.createWidget({
        id: "chest-button",
        type: "custom",
        defaultArea: CustomizableUI.AREA_NAVBAR,

            onBuild(doc) {
                const btn = doc.createXULElement("toolbarbutton");

                btn.id = "chest-button";
                btn.className =
                "toolbarbutton-1 chromeclass-toolbar-additional";

                btn.setAttribute("label", "Chest");
                btn.setAttribute("tooltiptext", "Chest");

                btn.addEventListener("command", () => {
                    Services.prompt.alert(
                        null,
                        "Chest",
                        "just an animated chest"
                    );
                });

                return btn;
            }
    });
})();
