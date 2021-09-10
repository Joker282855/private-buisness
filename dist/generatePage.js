function generatePage(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, inital-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <title>Team Roster</title>
    </head>
        
    <body>
        <header class="text-center bg-primary height 40%">
            <h1>Team Roster</h1>
        </header>
        </br>
        <main class="col-12 d-flex flex-row">
            <div class="container">
                <div class="card bg-light">
                    <h2>${data.manager}</h2>
                    <form class="card-body height 50%">
                        <label class="form-label">ID: ${data.employeeId}</label>
                        </br>
                        <label class="form-label text-decroation-none"><a href="https://www.${data.email}">Email: https://www.${data.email}</a></label>
                        </br>
                        <label class="form-label">Office Number: ${data.office}
                    </form>
                </div>
                </br>
                <div class="card bg-light">
                    <h2>${data.name}</h2>
                    <form class="card-body height 50%">
                        <label class="form-label">ID: ${data.number}</label>
                        </br>
                        <label class="form-label text-decoration-none"><a href="https://www.${data.address}">Email: https://www.${data.address}</a></label>
                        </br>
                        <label class="form-label text-decoration-none"><a href="https://github.com/${data.github}">School or Github: https://github.com/${data.github}</a></label>
                    </form>
                </div>
                </br>
                <div class="card bg-light">
                    <h2>${data.nameTwo}</h2>
                    <form class="card-body">
                        <label class="form-lable">ID: ${data.idTwo}</label>
                        </br>
                        <label class="form-label text-decoration-none"><a href="https://www.${data.addressTwo}">Email: https://www.${data.addressTwo}</a></label>
                        </br>
                        <label class="form-label">Github or School: ${data.school}</label>
                    </form>
                </div>
            </div>
        </main>
        </br>
        <footer class="text-center bg-primary height 40%">
            <p>Made by Joshua Jackson</p>
        </footer>
    </body>
</html>
    `;
}

module.exports = generatePage;