import notifee, { AndroidStyle } from '@notifee/react-native';

let id = ''

export const create = async (title, body, icon, notificationId, onClick) => {
  const channelId = await notifee.createChannel({ id: 'default', name: 'Default Channel', });
  await notifee.requestPermission();

  id = Math.random().toString()
  const notification = notifee.displayNotification({
    id: notificationId ? notificationId : id,
    title: title,
    body: body,
    android: icon ? {
      channelId,
      // asForegroundService:true,
      smallIcon: 'ic_small',
      largeIcon: icon,
      style: { type: AndroidStyle.BIGPICTURE, picture: icon },
      pressAction: {
        id: 'default',
      },
    } :
      { channelId, smallIcon: 'ic_small' },
    ios: icon ? {
      categoryId: "reminder",
      attachments: [{ url: icon }]
    } :
      {
        // categoryId: "new-episode",
        categoryId: "reminder",

      },
  });
  return notification;
}


export const close = async (notificationId) => {
  await notifee.cancelNotification(notificationId ? notificationId : id);
}
