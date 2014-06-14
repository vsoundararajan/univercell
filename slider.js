$(function(){
      var slider = new BeaverSlider({
        structure: {
          container: {
            id: "my-slider",
            width: 540,
            height: 620
          }
        },
        content: {
          images: imgs2
        },
        animation: {
          effects: effectSets["slider: big set 2"],
          interval: 1000
        }
      });  

      var homeSlider = new BeaverSlider({
        structure: {
          container: {
            id: "home-slider",
            width: 1040,
            height: 1000
          }
        },
        content: {
          images: imgs2
        },
        animation: {
          effects: effectSets["slider: big set 2"],
          interval: 1000
        }
      });
});

