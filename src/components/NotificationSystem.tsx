/*tslint:disable*/
import * as React from 'react';
import * as NotificationSystem from 'react-notification-system';

export let notificationSystem: any = null;

export function addNotification(notification: NotificationSystem.Notification) {
    if (notificationSystem) {
        notification.position = 'tr';
        notificationSystem.addNotification(notification);
    }
}

export class NotificationSystemFrame extends React.PureComponent {

    componentDidMount(): void {
        notificationSystem = this.refs.notificationSystem;
    }

    render() {
        return (
            <NotificationSystem ref="notificationSystem"/>
        );
    }
}