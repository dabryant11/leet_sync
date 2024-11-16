var Solution = function(w) {
  this.weights = new Map();
  this.sum=0;
  for (let i=0; i<w.length; i++) {
    this.sum += w[i];
    this.weights.set(this.sum, i);
  }
};

Solution.prototype.pickIndex = function() {
  let index = Math.floor(Math.random() * this.sum);
  for (let key of this.weights.keys())
    if (index<key) return this.weights.get(key)
};
