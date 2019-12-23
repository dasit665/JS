document.querySelector("button#get")
    .addEventListener("click", (e) =>
    {
        e.preventDefault();

        let some = fetch("/Home/GetData");

        some.then(res => res.json())
            .then(res => console.log(res))
            .catch(error => console.log(error));
    });


document.querySelector("button#getAsync")
    .addEventListener("click", (e) =>
    {
        e.preventDefault();

        (async function ()
        {
            try
            {
                let some = await fetch("/Home/GetData");
                console.log(await some.json());
            }

            catch (error)
            {
                console.log(error);
            }

        })();
    });

/*########################################################*/
let ID = document.forms["MainForm"]["ID"].value;
let Name = document.forms["MainForm"]["Name"].value;
let request =
{
    ID: ID,
    Name: Name
};

document.querySelector("button#post")
    .addEventListener("click", (e) =>
    {
        e.preventDefault();

        let ID = document.forms["MainForm"]["ID"].value;
        let Name = document.forms["MainForm"]["Name"].value;
        let request =
        {
            ID: ID,
            Name: Name
        };

        let some = fetch("/Home/PostData",
            {
                method: "POST",
                headers:
                {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(request)
            });

        some.then(res => res.text())
            .then(res => console.log(res))
            .catch(error => console.log(error));
    });

document.querySelector("button#postAsync")
    .addEventListener("click", (e) =>
    {
        e.preventDefault();

        let ID = document.forms["MainForm"]["ID"].value;
        let Name = document.forms["MainForm"]["Name"].value;
        let request =
        {
            ID: ID,
            Name: Name
        };

        (async function ()
        {
            try
            {
                let some = await fetch("/Home/PostData",
                    {
                        method: "POST",
                        headers:
                        {
                            "Content-Type": "application/json"
                        },

                        body: JSON.stringify(request)
                    });

                console.log(await some.text());
            }

            catch (Error)
            {
                console.log(Error);
            }
                       
        }
        )();
    });