// index.js (example)
const { showBanner } = require('./neon-banner');

// show banner for ~2.5s then start bot
showBanner('Voltage MD', { font: 'Big', duration: 2200 });

setTimeout(() => {
  // your normal bot startup code here
  console.log('Starting Voltage MD service...');
  // e.g., initialize WhatsApp Cloud API client, webhooks, etc.
}, 2300);
