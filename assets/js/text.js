$(function() {
    var title = document.title,
      animSeq = ["|"],
        animIndex = 0,
        titleIndex = 0;
    function doInverseSpinZeroPitch() {
        var loadTitle = title.substring(0, titleIndex);
        if (titleIndex > title.length) {
            animIndex = 0;
            titleIndex = 0
        }
        if (animIndex > 1) {
            titleIndex++;
            animIndex = 0
        }
        document.title = loadTitle + animSeq[0];
        animIndex++
    }
    window.setInterval(doInverseSpinZeroPitch, 150);
});
$(function() {
  $(".typed").typed({
      strings: ['Contributing to Evolution X ', "Computer Science Student ", "@HemantSachdeva", "He Code When He's Bored ", "19 y.o "],
      typeSpeed: 50,
      loop: true,
      cursorChar: "|",
  });
});
