const rateLimitQueueMap = new Map();
const MAX_QUEUE_SIZE = 100;
const PROCESS_RATE = 1; // 1 запрос в секунду

/* алгоритм дырявого ведра */

function leakyBucketRateLimiter(req, res, next) {
  const ip = req.ip;
  const now = Date.now();

  if (!rateLimitQueueMap.has(ip)) {
    rateLimitQueueMap.set(ip, { queue: [], lastProcessed: now });
  }

  const bucket = rateLimitQueueMap.get(ip);
  const elapsed = (now - bucket.lastProcessed) / 1000;
  const leaks = Math.floor(elapsed * PROCESS_RATE);

  // "утекаем" старые запросы
  if (leaks > 0) {
    bucket.queue.splice(0, leaks);
    bucket.lastProcessed = now;
  }

  if (bucket.queue.length >= MAX_QUEUE_SIZE) {
    return res.status(429).send('Too Many Requests');
  }

  bucket.queue.push(now);
  next();
}
