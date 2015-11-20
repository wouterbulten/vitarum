export default class RealmGenerator {

  constructor(detail, roughness) {
    this.size = Math.pow(2, detail) + 1;
    this.max = this.size - 1;
    this.map = new Float32Array(this.size * this.size);
    this.roughness = roughness;
  }

  set(x, y, val) {
    this.map[x + this.size * y] = val;
  }

  get(x, y) {
    if (x < 0 || x > this.max || y < 0 || y > this.max) return -1;
    return this.map[x + this.size * y];
  }

  generate() {
    this.set(0, 0, 0);//this.max);
    this.set(this.max, 0, 4);//this.max / 2);
    this.set(this.max, this.max, 0);
    this.set(0, this.max, 4);//this.max / 2);
    this.divide(this.max);
  }

  square(x, y, size, offset) {
    let ave = this.average([
      this.get(x - size, y - size),   // upper left
      this.get(x + size, y - size),   // upper right
      this.get(x + size, y + size),   // lower right
      this.get(x - size, y + size)    // lower left
    ]);
    this.set(x, y, ave + offset);
  }

  average(values) {
    let valid = values.filter(function(val) { return val !== -1; });
    let total = valid.reduce(function(sum, val) { return sum + val; }, 0);
    return total / valid.length;
  }

  divide(size) {
    let x, y, half = size / 2;
    let scale = this.roughness * size;
    if (half < 1) return;
    for (y = half; y < this.max; y += size) {
      for (x = half; x < this.max; x += size) {
        this.square(x, y, half, Math.random() * scale * 2 - scale);
      }
    }
    for (y = 0; y <= this.max; y += half) {
      for (x = (y + half) % size; x <= this.max; x += size) {
        this.diamond(x, y, half, Math.random() * scale * 2 - scale);
      }
    }
    this.divide(size / 2);
  }

  diamond(x, y, size, offset) {
    let ave = this.average([
      this.get(x, y - size),      // top
      this.get(x + size, y),      // right
      this.get(x, y + size),      // bottom
      this.get(x - size, y)       // left
    ]);
    this.set(x, y, ave + offset);
  }
}
