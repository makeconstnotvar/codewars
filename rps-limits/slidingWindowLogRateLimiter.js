const rateLimitLogMap = new Map();
const WINDOW_SIZE = 60 * 1000; // 1 минута
const MAX_REQUESTS = 100;

/* журнал скользящих интервалов */

function slidingWindowLogRateLimiter(req, res, next) {
  const ip = req.ip;
  const now = Date.now();

  if (!rateLimitLogMap.has(ip)) {
    rateLimitLogMap.set(ip, []);
  }

  const timestamps = rateLimitLogMap.get(ip);

  // Удаляем старые запросы
  while (timestamps.length && now - timestamps[0] > WINDOW_SIZE) {
    timestamps.shift();
  }

  if (timestamps.length >= MAX_REQUESTS) {
    return res.status(429).send('Too Many Requests');
  }

  timestamps.push(now);
  next();
}
