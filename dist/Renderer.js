class Renderer {
  constructor() {}
  render(recipes) {
    const source = $("#recipes-template").html();
    const recipestemplate = Handlebars.compile(source);
    const newHTML = recipestemplate({ recipes });
    $("#recipes-container").append(newHTML);
  }
}
