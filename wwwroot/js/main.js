let modalWindow =
    [
        document.querySelector(".modalWrap"),
        document.querySelector(".modalWindow")
    ];

function CloseModalWindow()
{
    modalWindow.forEach((el) =>
    {
        el.classList.add("hide");
    });

    addEventListener("keydown", null);
}

function ShowModalWindow()
{
    modalWindow.forEach((el) =>
    {
        el.classList.remove("hide");
    });

    addEventListener("keydown", (e) =>
    {
        if (e.key == "Escape")
        {
            CloseModalWindow();
        }
    });
}



document.querySelector("#close-window").onclick = () =>
{
    CloseModalWindow();
};

document.querySelector('#show-window').onclick = () =>
{
    ShowModalWindow();
};

document.querySelector(".modalWrap").onclick = (e) =>
{
    if (e.target.className == "modalWrap")
    {
        CloseModalWindow();
    }
    else
    {
        return false;
    }
};

addEventListener("keydown", (e) =>
{
    if (e.key == "Escape")
    {
        CloseModalWindow();
    }
})