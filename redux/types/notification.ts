export enum NotificationStatus {
  NOTIFICATION = "NOTIFICATION",
  DOING = "DOING",
  DONE = "DONE",
}
export type INotification = {
  id: number;
  client: string;
  phone: string;
  status: NotificationStatus;
};

export type CreateNotificationDto = {
  client: string;
  phone: string;
  status: NotificationStatus;
};
