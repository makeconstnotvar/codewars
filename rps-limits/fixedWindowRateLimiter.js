const rateLimitMap = new Map();
const WINDOW_SIZE = 60 * 1000; // 1 минута
const MAX_REQUESTS = 100;

/* счетчик фиксированных интервалов */

function fixedWindowRateLimiter(req, res, next) {
  const ip = req.ip;
  const now = Date.now();
  const entry = rateLimitMap.get(ip) || { count: 0, start: now };

  if (now - entry.start > WINDOW_SIZE) {
    // окно истекло — сброс
    entry.count = 1;
    entry.start = now;
  } else {
    entry.count += 1;
  }

  rateLimitMap.set(ip, entry);

  if (entry.count > MAX_REQUESTS) {
    return res.status(429).send('Too Many Requests');
  }

  next();
}
//app.use(fixedWindowRateLimiter);