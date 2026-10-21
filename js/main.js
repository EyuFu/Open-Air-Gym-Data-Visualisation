// Embed every Vega-Lite chart. One idiom per .vg.json file in this folder.
const charts = ["01_isotype", "02_choropleth", "03_dotmap", "04_propsymbol", "05_bump", "06_slope", "07_small_multiples", "08_heatmap", "09_waffle", "10_polar", "11_parallel", "12_matrix"];
const opts = { renderer: "svg" };  // default vega-embed options, as in the Week 7 tutorial: the "..." menu (save as SVG/PNG, view source, open in Vega Editor) stays on
// Wait for the web fonts first, so Vega measures label widths with the real typeface.
document.fonts.ready.then(() => {
  charts.forEach(name => {
    vegaEmbed("#vis-" + name, "js/" + name + ".vg.json", opts)
      .catch(err => {
        document.querySelector("#vis-" + name).textContent = "This chart could not be loaded.";
        console.error(name, err);
      });
  });
});
