let data =
    [
        {
            ID: 1,
            TaskName: "Task One",
            TaskData: "Data 1, Data 1, Data 1, Data 1, Data 1, Data 1, Data 1, Data 1, Data 1, Data 1"
        },
        {
            ID: 2,
            TaskName: "Task Two",
            TaskData: "Data 2, Data 2, Data 2, Data 2, Data 2, Data 2, Data 2, Data 2, Data 2, Data 2"
        },
        {
            ID: 3,
            TaskName: "Task Three",
            TaskData: "Data 3, Data 3, Data 3, Data 3, Data 3, Data 3, Data 3, Data 3, Data 3, Data 3"
        },
        {
            ID: 4,
            TaskName: "Task Four",
            TaskData: "Data 4, Data 4, Data 4, Data 4, Data 4, Data 4, Data 4, Data 4, Data 4, Data 4"
        },
        {
            ID: 5,
            TaskName: "Task Five",
            TaskData: "Data 5, Data 5, Data 5, Data 5, Data 5, Data 5, Data 5, Data 5, Data 5, Data 5"
        }
    ];



function addLi(obj)
{
    let li = document.createElement("li");
    li.classList.add("c-task");
    li.setAttribute("id", `id${obj.ID}`)

    let ID = document.createElement("div");
    ID.classList.add("c-id");
    ID.textContent = obj.ID;
    li.appendChild(ID);

    let TName = document.createElement("div");
    TName.classList.add("c-taskname");
    TName.textContent = obj.TaskName;
    li.appendChild(TName);

    let TData = document.createElement("div");
    TData.classList.add("c-taskdata");
    TData.textContent = obj.TaskData;
    li.appendChild(TData);

    let Btn = document.createElement("button");
    Btn.classList.add("c-button");
    Btn.setAttribute("id", `id${obj.ID}`);
    Btn.setAttribute("type", "button");
    Btn.textContent = "Delete";
    li.appendChild(Btn);

    return li;
}


function SetDeleteAction()
{
    document.querySelectorAll("button.c-button")
        .forEach((e) =>
        {
            e.addEventListener("click", (btn) =>
            {
                let temp = document.querySelector(`li[id=${btn.target.id}].c-task`)

                if (temp != null)
                {
                    temp.remove();
                }
            });
        });
}



document.forms["mainForm"]
    .addEventListener("submit", e =>
    {
        e.preventDefault();

        let id;

        //parseInt(document.querySelector("li").id.match(/\d/)[0]) === null

        if (document.querySelector("li") == null)
        {
            id = 0;
        }
        else
        {
            id = parseInt(document.querySelector("li").id.match(/\d/)[0]);
        }


        let taskName = e.target.elements.taskName.value;
        let taskData = e.target.elements.taskData.value;

        let trObject =
        {
            ID: ++id,
            TaskName: taskName,
            TaskData: taskData
        };

        document.querySelector("ul").prepend(addLi(trObject));

        SetDeleteAction();

        e.target.reset();

    });

(function ()
{
    data.reverse();
    let fragment = document.createDocumentFragment();

    data.forEach(e =>
    {
        fragment.appendChild(addLi(e));
    });

    document.querySelector("ul.class-ul").appendChild(fragment);

    SetDeleteAction();

})();