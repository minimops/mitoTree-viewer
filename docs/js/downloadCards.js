/*
This file is part of the mitoTree project and authored by Noah Hurmer.

Copyright 2024, Noah Hurmer & mitoTree.

This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at https://mozilla.org/MPL/2.0/.
*/


// path to the DOCS file in the data directory
const docsUrl = 'data/DOCS.json';

// fetch the file descriptions from the DOCS file and populate the download section
fetch(docsUrl)
    .then(response => response.json())
    .then(files => {
        const downloadSection = document.getElementById('download-section');

        files.forEach(file => {
            const card = document.createElement('div');
            card.className = 'col-12';

            // download links for each file version
            let downloadLinks = '';
            file.versions.forEach(version => {
                downloadLinks += `
                    <a href="data/${version.fileName}" download class="btn btn-success me-2 btn-sm">${version.format}</a>
                `;
            });

            // create a card per entry
            card.innerHTML = `
                <div class="card mb-4 shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">${file.name}</h5>
                        <p class="card-text">${file.description}</p>
                        ${downloadLinks}
                    </div>
                </div>
            `;

            downloadSection.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching file descriptions:', error));
