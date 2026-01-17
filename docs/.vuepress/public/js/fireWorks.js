//https://github.com/alpacachen/cele
const imgs = [
    '/img/1.png',
    '/img/2.png',
    '/img/3.png',
    '/img/4.png',
    '/img/5.png',
    '/img/6.png',
    '/img/7.png',
    '/img/8.png',
    '/img/9.png',
    '/img/10.png',
    '/img/11.png',
    '/img/12.png'
];

const random = Math.random.bind(Math);
const floor = Math.floor.bind(Math);

class Fireworks {
    constructor(ref, option) {
        let canvas = document.createElement('canvas');
        this.canvas = canvas;
        this.ref = ref;
        this.ctx = canvas.getContext('2d');
        this.width = ref.offsetWidth;
        this.height = ref.offsetHeight;
        this.option = option;
        this.ratio = window.devicePixelRatio;
        canvas.width = this.width * this.ratio;
        canvas.height = this.height * this.ratio;
        canvas.style.cssText = `position:absolute;top:0;left:0;pointer-events: none;z-index:0; width:${this.width}px;height:${
            this.height
        }px`;
        ref.appendChild(canvas);
        this.spiritsList = [];
        for (let i = 0; i < this.option.number; i++) {
            this.spiritsList.push(
                new Spirit(this.ctx, {
                    width: this.width,
                    height: this.height,
                    ratio: this.ratio
                })
            );
        }
        setTimeout(() => {
            this.render();
            setTimeout(() => {
                this.destroy();
            }, 10000);
        }, this.option.delay * 1000 || 0);
    }
    render() {
        this.ctx.clearRect(0, 0, this.width * this.ratio, this.height * this.ratio);
        for (let i = 0; i < this.spiritsList.length; i++) {
            this.spiritsList[i].draw();
            this.spiritsList[i].update();
        }
        this.raf = requestAnimationFrame(this.render.bind(this));
    }
    destroy() {
        cancelAnimationFrame(this.raf);
        this.ref.removeChild(this.canvas);
        this.spiritsList.forEach(item => {
            item = null;
            return item;
        });
    }
}

class Spirit {
    constructor(ctx, options) {
        this.ctx = ctx;
        this.options = options;
        this.x = this.randomX();
        this.y = -random() * 400;
        this.vy = 1.2 + random();
        this.img = new Image();
        this.img.src = imgs[floor(random() * 11)];
        this.angle = 0;
        this.vangle = random() > 0.5 ? random() * 8 : -random() * 8;
    }
    draw() {
        if (this.stop) return;
        if (this.y > (this.options.height || 1000)) {
            this.stop = true;
            return;
        }
        this.ctx.save();
        this.ctx.translate(this.x - 10, this.y - 10);
        this.ctx.rotate((this.angle * Math.PI) / 180);
        this.ctx.drawImage(this.img, -10, -10, 16 * this.options.ratio, 16 * this.options.ratio);
        this.ctx.restore();
    }
    update() {
        if (this.stop) return;
        this.y += this.vy;
        this.angle += this.vangle;
    }
    randomX() {
        const { width, ratio } = this.options;
        return floor(random() * width) * ratio;
    }
}

new Fireworks(document.body, {number: 15, delay: 0.5});