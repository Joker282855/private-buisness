function generatePage(data) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, inital-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>${data.manager}</title>
        </head>
        
        <body>
            <h1>Great News</h1>
        </body>
        </html>
    `;
}

module.exports = generatePage;