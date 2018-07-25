(function () {
    const note = "note-callout";
    const warning = "warning-callout";
    const important = "important-callout";

    UpdateText(note);
    UpdateText(warning);
    UpdateText(important);

    function UpdateText(tagName) {
        const elements = document.getElementsByTagName(tagName);

        $.each(elements, function (index, element) {
            var currentContent = element.textContent;
            var trimmed = $.trim(currentContent);

            if (tagName === note) {
                element.innerHTML = "<b>NOTE:</b> " + trimmed;
            } else if (tagName === warning) {
                element.innerHTML = "<b>WARNING:</b> " + trimmed;
            } else if (tagName === important) {
                element.innerHTML = "<b>IMPORTANT:</b> " + trimmed;
            } else {
                element.textContent = trimmed;
            }
        });
    }
}());



