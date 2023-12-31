import { Redis } from "@upstash/redis"

function getRedisCredentials() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || url.length === 0) {
    throw new Error('Missing UPSTASH_REDIS_REST_URL');
  }
  if (!token || token.length === 0) {
    throw new Error('Missing UPSTASH_REDIS_REST_TOKEN');
  }
  return { url, token };
}

export const db = new Redis({
  url: getRedisCredentials().url,
  token: getRedisCredentials().token,
})