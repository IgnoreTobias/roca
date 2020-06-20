class RocaLink extends HTMLAnchorElement {
  connectedCallback() {
    this.addEventListener("mouseenter", () => {
        var click = new Audio(
          "RocaLink.mp3"
        );
        click.volume = 0.8;
        click.preload = true;
        click.play();

        const itemDim = this.getBoundingClientRect(),
        itemSize = {
          x: itemDim.right - itemDim.left,
          y: itemDim.bottom - itemDim.top },

          shapes = ['circle', 'rect', 'polygon', 'line', 'cross', 'curve', 'zigzag'],

          chosenS = Math.floor(Math.random() * shapes.length);

          const burst = new mojs.Burst({
            left: itemDim.left + itemSize.x / 2,
            top: itemDim.top + itemSize.y / 2,
            radiusX: itemSize.x - 75,
            radiusY: itemSize.y + 5,
            count: 8,
            
            children: {
              shape: shapes[chosenS],
              radius: 10,
              scale: { .7 : 1 },
              fill: 'none',
              points: 7,
              stroke: 'teal',
              strokeDasharray: '100%',
              strokeDashoffset: { '-100%': '100%' },
              duration: 450,
              delay: 50,
              easing: 'quad.out',
              isShowEnd: false }
            });

            burst.play();
    });

    this.addEventListener("click", () => {
      window.open(this.href);
    })
  }

}

customElements.define("roca-link", RocaLink, { extends: "a" });
