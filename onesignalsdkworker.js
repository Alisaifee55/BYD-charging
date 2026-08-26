importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

// ── App badge support ──
// iOS PWAs don't get a badge count automatically like native apps do;
// we set it ourselves whenever a push notification arrives, based on
// how many notifications are currently showing (undismissed).
self.addEventListener('push', function (event) {
  event.waitUntil(
    self.registration.getNotifications().then(function (notifications) {
      var count = notifications.length + 1; // +1 for the one about to be shown
      if (self.navigator && self.navigator.setAppBadge) {
        self.navigator.setAppBadge(count).catch(function () {});
      }
    })
  );
});
