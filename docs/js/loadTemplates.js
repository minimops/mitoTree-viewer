/*
This file is part of the mitoTree project and authored by Noah Hurmer.

Copyright 2024, Noah Hurmer & mitoTree.

This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at https://mozilla.org/MPL/2.0/.
*/


// used to load page template into the multiple html pages
// i.e. header and footer

function loadTemplate(templatePath, containerId) {
    fetch(templatePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => console.error('Error loading template:', error));
}

document.addEventListener('DOMContentLoaded', function () {
    loadTemplate('templates/header.html', 'header-container');
    loadTemplate('templates/footer.html', 'footer-container');
});
