window.addEventListener('DOMContentLoaded', () => {
  new TypeIt('.section__title', 
  {
    strings: ["Sharon Soetadi"],
    afterComplete: function(instance) {
      instance.destroy();
      new TypeIt('.section__paragraph-1', {
        speed: 100,
        afterComplete: function(instance) {
          instance.destroy();
        }
      })
      // .type("marketin an", {delay: 100})
      // .move(-3, {delay: 100})
      // .type('g', {delay: 400})
      // .move(null, {to: 'START', instant: true, delay: 300})
      // .move(1, {delay: 200})
      // .delete(1)
      // .type('M', {delay: 225})
      // .pause(200)
      // .move(3, {instant: true})
      // .pause(200)
      // .move(5, {instant: true})
      // .move(null, {to: 'END', instant: true, delay: 300})
      // .type(" inform", {delay: 100})
      // .move(-7, {instant: true, delay: 100})
      // .type("d", {delay: 400})
      // .move(2)
      // .pause(200)
      // .move(null, {to: 'END', instant: true, delay: 300})
      // .type("ation system")
      // .move(-17, {instant: true})
      // .delete(1)
      // .type('I', {delay: 225})
      // .move(12, {delay: 100})
      // .delete(1)
      // .type('S', {delay: 225})
      // .move(null, {to: 'END', instant: true, delay: 300})
      .type("marketing and information system")
      .move(null, {to: 'START', instant: true, delay: 300})
      .move(1)
      .delete(1)
      .type('M', {delay: 225})
      .move(14, {instant: true, delay: 300})
      .delete(1)
      .type('I', {delay: 225})
      .move(12, {isntant: true})
      .delete(1)
      .type('S', {delay: 225})
      .move(null, {to: 'END', instant: true, delay: 300})
      .pause(2)
      .go()
    }
  }).go()
});