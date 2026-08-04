export default function formatFollowers(c) {
  return c > 1000 ? (c/1000)+'K' : c;
}

