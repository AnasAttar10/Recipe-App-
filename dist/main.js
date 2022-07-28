$("#search").on("click", function () {
  let input = $("#recipeName").val();
  $.get(`/recipes/${input}`, function (recipes) {
    let render = new Renderer();
    render.render(recipes);
  });
});
$("#recipes-container").on("click", ".imageclick", function () {
  alert($(this).closest(".recipe-container").find("ul li:nth-child(1)").text());
});
