function handleThumbnailClicks() {
  $(".thumbnail").on("click", (e) => {
    console.log(e.target);
    const imgSrc = $(e.currentTarget).find("img").attr("src");
    const imgAlt = $(e.currentTarget).find("img").attr("alt");
    $(".hero img").attr("src", imgSrc).attr("alt", imgAlt);
  });
}

$(handleThumbnailClicks);
