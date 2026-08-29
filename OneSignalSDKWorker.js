importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

// ── App badge support ──
// iOS PWAs don't get a badge count automatically like native apps do;
// we set it ourselves whenever a push notification arrives, based on
// how many notifications are currently showing (undismissed).
//
// This listener runs alongside OneSignal's own 'push' listener (added
// by the imported script above) — both fire independently on the same
// event, so this one only ever touches the badge count and never
// interferes with OneSignal actually displaying the notification.
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

// Clear the badge once the user actually opens a notification / the app,
// so it doesn't stay stuck showing a stale count.
self.addEventListener('notificationclick', function () {
  if (self.navigator && self.navigator.clearAppBadge) {
    self.navigator.clearAppBadge().catch(function () {});
  }
});
