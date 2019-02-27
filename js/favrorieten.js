    // Get the checkbox
    var checkBox = document.getElementById("film1HEART1");
    // Get the output text
    var faveFilmContainer =
        document.getElementsByClassName("favoFilmContainer");


    console.log('test');
    console.log(checkBox);
    console.log(faveFilmContainer);



    function addFilmFucntion() {
        faveFilmContainer.classList.add('favoFilmClass');

    }
    checkBox.addEventListener('click', addFilmFucntion, false);
