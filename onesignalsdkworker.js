importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

// ── App badge support temporarily disabled for testing ──
// iOS Safari's service worker push handling can be strict about extra
// 'push' listeners on top of OneSignal's own — testing without this
// first to confirm whether it was interfering with notification display.
// If notifications start working with this version, we'll re-add badge
// support in a way that doesn't conflict (e.g. inside OneSignal's own
// notification click/display hooks instead of a separate push listener).
