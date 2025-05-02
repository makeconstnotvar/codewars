const rateLimitTokenMap = new Map();
const MAX_TOKENS = 100;
const REFILL_RATE = 1; // токен в секунду

/* алгоритм маркерной корзины */

function tokenBucketRateLimiter(req, res, next) {
  const ip = req.ip;
  const now = Date.now();

  let bucket = rateLimitTokenMap.get(ip);
  if (!bucket) {
    bucket = { tokens: MAX_TOKENS, lastRefill: now };
  }

  // Пополнение токенов
  const elapsed = (now - bucket.lastRefill) / 1000; // в секундах
  const refill = Math.floor(elapsed * REFILL_RATE);
  if (refill > 0) {
    bucket.tokens = Math.min(MAX_TOKENS, bucket.tokens + refill);
    bucket.lastRefill = now;
  }

  if (bucket.tokens < 1) {
    return res.status(429).send('Too Many Requests');
  }

  bucket.tokens -= 1;
  rateLimitTokenMap.set(ip, bucket);
  next();
}
