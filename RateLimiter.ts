export class RateLimiter {
    private rateLimitMap: Map<String, number> = new Map();
    private defaultKey: string;
    private limit: number;

    constructor(defaultKey: string, defaultLimit: number) {
        this.defaultKey = defaultKey;
        this.limit = defaultLimit;
    }

    public setRateLimit(defaultKey: string = this.defaultKey) {
        this.rateLimitMap.set(defaultKey, Date.now() + this.limit);
    }

    public canUses(key: string = this.defaultKey): boolean {
        if (!this.rateLimitMap.has(key)) return true;

        return Date.now() > this.rateLimitMap.get(key)!;
    }
}
