function dontShowTypeText() {
      $.cookie('dontShowText', "No")
      $('#text-board').hide('slow')
}

function showTypeTextAgain() {
      $.cookie('dontShowText', "Yes")
      checkShowTypeText()
}

function checkShowTypeText() {
      console.log('checkShowTypeText')
      var doShow = $.cookie('dontShowText')
      if (doShow != "No") {
            setTimeout(() => {
                  console.log('2000')
                  $('#text-board').show('slow')
                  setTimeout(() => {
                        showTypeText()

                  }, 1500);
            }, 2000);
      }
}

function showTypeText() {

      //Show the div then do next code:
      new TypeIt("#myElement", {
            strings: "Once upon a code, I embarked on a journey as a passionate developer, eager to explore the endless possibilities of technology and make my mark in the digital realm. Join me as I take you through my ever-evolving story, where each step has shaped me into the skilled and innovative developer I am today.",
            speed: 100,
            waitUntilVisible: true,
      }).pause(2000).go();
}

function toggleDiv(id) {
      $('#des-' + id).toggle(1000);
      $('html, body').animate({
            scrollTop: $("#p-des-" + id).offset().top - 100
      }, 600);

      setTimeout(() => {
            document.getElementById('intro-i-0').style.display = 'none'
            document.getElementById('dots').style.display = 'none'
      }, 200);
}