function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

const publicVapidKey = 'BM-KLhqHaocRV4wT-3gp1RzWqj3PhlKPmpWrihXpaYgzfKF3KRfN9ZGR3nRz7p-lCBAKvH80qb4UOcFIorjkTP4';


async function triggerPushNotification() {
  if ('serviceWorker' in navigator) {
    const register = await navigator.serviceWorker.register('/sw.js', {
      scope: '/'
    });

    const subscription = await register.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
    });

    await fetch('http://localhost:4000/createNotification2', {
      method: 'POST',
      body: JSON.stringify({subscription:subscription, title:'title', message:'message'}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } else {
    console.error('Service workers are not supported in this browser');
  }
}

document.addEventListener('DOMContentLoaded', ()=>{triggerPushNotification().catch(error => console.error(error));});


