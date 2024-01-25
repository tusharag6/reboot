import DashboardNavbar from "../_components/dashboard-nav";
import FacilityDashboardSidebar from "../_components/facility-sidebar";
import Footer from "../_components/footer";

export default function FacilityDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DashboardNavbar />
      <div className="flex">
        <FacilityDashboardSidebar />
        {children}
      </div>
      {/* <Footer /> */}
    </>
  );
}
