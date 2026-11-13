export const randf = (lo, hi) => 
  Math.random() * (hi === undefined ? lo : (hi - lo) + lo)
;
export const rand = (lo, hi) => 
  ~~(hi === undefined ? randf(0, lo) : randf(lo, hi))
;
export const dist = (a, b) => 
  Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2)
;
