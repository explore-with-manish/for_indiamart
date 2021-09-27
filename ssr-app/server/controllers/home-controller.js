import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import RootComponent from '../../src/components/root/RootComponent';

const index = function (req, res, next) {
    const reactRoot = ReactDOMServer.renderToString(<RootComponent />);
    const indexFile = path.resolve('./build/index.html');

    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Error Loading Main Page!');
        }

        return res.send(
            data.replace(
                '<div id="root"></div>',
                `
                    <div>
                        <h1 class="text-success text-center">Rendered from Server</h1>
                        <div id="root">
                            ${reactRoot}
                        </div>
                    </div>
                `
            )
        );
    });
};

export { index };