import DepositModalPage from "./DepositModalClient";
import ProtectedRoute from "@/components/ProtectedRoute";
export default function DepositPage() {
  return (
    <ProtectedRoute>
      <DepositModalPage />
    </ProtectedRoute>
  );
}