export default function DashboardLayout({
  children,
  user,
  revenu,
  notification,
}: {
  children: React.ReactNode;
  user: React.ReactNode;
  revenu: React.ReactNode;
  notification: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{user}</div>
          <div>{revenu}</div>
        </div>
        <div style={{ display: 'flex' ,flex:1}}>{notification}</div>
      </div>
    </>
  );
}
