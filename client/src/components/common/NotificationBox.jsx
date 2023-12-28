import '../../assets/styles/components/NotificationBox.scss'
import { useGetAllAlertsQuery } from '../../redux/slices/alertApiSlice'

export default function NotificationBox() {
    const { data: alerts, isFetching: isFetchingAlerts } =
        useGetAllAlertsQuery();
    
    return (
        <div className="notification-box">
          {isFetchingAlerts ? "جاري التحميل" : alerts?.body?.length === 0 ? "لا يوجد إشعارات" : alerts?.body?.map((alert) => {
            return (
              <div className="notification-box__alert">
                <div className="notification-box__alert__title">
                  {alert.title}
                </div>
                <div className="notification-box__alert__body">
                  {alert.body}
                </div>
              </div>
            );
          })}
        </div>
    )
}
