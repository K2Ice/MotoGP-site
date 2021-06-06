const header = $(".headPic")
const nav = $(".mainNav")
let headerScrolled = true

$(document).on("scroll", function () {
  const skroll = $(document).scrollTop()

  if (skroll >= header.height() && headerScrolled) {
    nav.css({
      position: "fixed",
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
    })
    $(".mainNav ul")
      .animate(
        {
          width: "56vw",
          border: "1px solid black",
          borderRadius: "20px",
          overflow: "hidden",
        },
        500
      )
      .css({ backgroundColor: "rgba(0,0,0,1)" })
    $(".mainNav a").hover(
      function () {
        $(this).css({
          color: "red",
          backgroundColor: "transparent",
        })
      },
      function () {
        $(this).css({ color: "white", backgroundColor: "transparent" })
      }
    )
    $(".mainNav a").css({ padding: "10px 20px", backgroundColor: "black" })

    headerScrolled = !headerScrolled
  } else if (skroll <= header.height() && !headerScrolled) {
    headerScrolled = !headerScrolled
    nav.css({
      position: "static",
      top: "auto",
      left: "auto",
      transform: "none",
    })
    $(".mainNav ul")
      .animate(
        {
          width: "100%",
          border: "1px solid black",
          borderRadius: "0px",
        },
        500
      )
      .css({ backgroundColor: "rgba(0,0,0,0.8)" })
    $(".mainNav a").css({
      padding: "20px 30px",
      backgroundColor: "transparent",
    })
    $(".mainNav a").hover(
      function () {
        $(this).css({ color: "white", backgroundColor: "rgba(205,33,34,0.7)" })
      },
      function () {
        $(this).css({ color: "white", backgroundColor: "transparent" })
      }
    )
  }
})
