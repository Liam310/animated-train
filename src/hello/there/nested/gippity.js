/**
 * Generates a random integer between two values, inclusive.
 * @param {number} min - The minimum possible value.
 * @param {number} max - The maximum possible value.
 * @returns {number} A random integer between min and max.
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Represents a geometric point in 2D space.
 */
class Point {
  /**
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Calculates the distance to another point.
   * @param {Point} other - Another point.
   * @returns {number} The Euclidean distance.
   */
  distanceTo(other) {
    return Math.sqrt((this.x - other.x) ** 2 + (this.y - other.y) ** 2);
  }
}

/**
 * Creates a delay.
 * @param {number} ms - Milliseconds to wait.
 * @returns {Promise<void>} Resolves after the given time.
 */
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * A simple in-memory cache for arbitrary data.
 */
class MemoryCache {
  constructor() {
    /** @type {Map<string, any>} */
    this.store = new Map();
  }

  /**
   * Adds or updates a cached value.
   * @param {string} key - The cache key.
   * @param {*} value - The value to store.
   */
  set(key, value) {
    this.store.set(key, value);
  }

  /**
   * Retrieves a cached value.
   * @param {string} key - The cache key.
   * @returns {*|null} The stored value, or null if not found.
   */
  get(key) {
    return this.store.has(key) ? this.store.get(key) : null;
  }

  /**
   * Clears all cached entries.
   */
  clear() {
    this.store.clear();
  }
}

/**
 * Converts a string into Title Case.
 * @param {string} input - The string to format.
 * @returns {string} The formatted string.
 */
function toTitleCase(input) {
  return input.replace(
    /\w\S*/g,
    (w) => w[0].toUpperCase() + w.slice(1).toLowerCase()
  );
}

/**
 * Fetches mock user data from an API.
 * @async
 * @param {string} endpoint - API endpoint URL.
 * @returns {Promise<{id: number, name: string, email: string}>}
 */
async function fetchUser(endpoint) {
  const res = await fetch(endpoint);
  if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
  return res.json();
}

/**
 * Sorts an array of numbers ascending.
 * @param {number[]} arr - The array to sort.
 * @returns {number[]} A new sorted array.
 */
function sortAscending(arr) {
  return [...arr].sort((a, b) => a - b);
}

/**
 * EventEmitter-style pub/sub utility.
 */
class EventHub {
  constructor() {
    /** @type {Record<string, Function[]>} */
    this.listeners = {};
  }

  /**
   * Registers an event listener.
   * @param {string} event - Event name.
   * @param {Function} handler - Callback function.
   */
  on(event, handler) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(handler);
  }

  /**
   * Emits an event to all listeners.
   * @param {string} event - Event name.
   * @param {...any} args - Event arguments.
   */
  emit(event, ...args) {
    (this.listeners[event] || []).forEach((fn) => fn(...args));
  }
}

/**
 * Calculates the moving average of a series of numbers.
 * @param {number[]} values - Array of numeric values.
 * @param {number} windowSize - Number of samples per window.
 * @returns {number[]} Array of averaged values.
 */
function movingAverage(values, windowSize) {
  const result = [];
  for (let i = 0; i <= values.length - windowSize; i++) {
    const window = values.slice(i, i + windowSize);
    result.push(window.reduce((a, b) => a + b, 0) / windowSize);
  }
  return result;
}
