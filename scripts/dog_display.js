window.onload = async () => {
    var dogButton = document.getElementById("getdog")

    //api call to dog ceo
    const dogApi = "https://dog.ceo/api/breeds/image/random";
    await fetch(dogApi).then((res) => {
        res.json().then((data) => {
            //create image element
            var newdog = document.createElement("img");
            newdog.src = data.message;
            //add image to container div
            document.getElementById("container").appendChild(newdog);

        });
    });

    //when the button is clicked do the same api call again
    dogButton.addEventListener('click', async () => {
        //clear previous image
        document.getElementById("container").innerHTML = null;

        await fetch(dogApi).then((res) => {
            res.json().then((data) => {
                // console.log(data)
                var newdog = document.createElement("img");
                newdog.src = data.message;
                document.getElementById("container").appendChild(newdog);

            });
        });
    });
}