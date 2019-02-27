    // Get the checkbox
    var checkBox = document.getElementById("film1HEART1");
    // Get the output text
    // var faveFilm =
    //   document.getElementsByClassName('favoFilm');


    console.log('test');
    console.log(checkBox);
    console.log(faveFilm);



    function addFilmFucntion() {
        if (checkBox.checked == true) {
            verstuurKnop.classList.add('favoFilmClass');
        } else {
            verstuurKnop.classList.remove('favoFilm');
        }

    }


    checkBox.addEventListener("click", addFilmFucntion, false);
