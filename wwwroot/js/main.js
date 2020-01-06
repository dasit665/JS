let modalWindow = document.querySelector(".modalWrap");

function CloseModalWindow()
{
    modalWindow.classList.add("hide");

    addEventListener("keydown", null);
}

function ShowModalWindow()
{
    modalWindow.classList.remove("hide");

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