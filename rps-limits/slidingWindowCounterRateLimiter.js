const rateLimitBucketMap = new Map();
const WINDOW_SIZE = 60 * 1000; // 1 минута
const BUCKET_SIZE = 10 * 1000; // 10 секунд
const MAX_REQUESTS = 100;

/* счетчик скользящих интервалов */

function slidingWindowCounterRateLimiter(req, res, next) {
  const ip = req.ip;
  const now = Date.now();
  const currentBucket = Math.floor(now / BUCKET_SIZE);

  if (!rateLimitBucketMap.has(ip)) {
    rateLimitBucketMap.set(ip, new Map());
  }

  const buckets = rateLimitBucketMap.get(ip);
  buckets.set(currentBucket, (buckets.get(currentBucket) || 0) + 1);

  // Суммируем количество запросов за последние WINDOW_SIZE
  let requestCount = 0;
  for (const [bucket, count] of buckets) {
    if ((currentBucket - bucket) * BUCKET_SIZE < WINDOW_SIZE) {
      requestCount += count;
    } else {
      buckets.delete(bucket); // очистка старых бакетов
    }
  }

  if (requestCount > MAX_REQUESTS) {
    return res.status(429).send('Too Many Requests');
  }

  next();
}
