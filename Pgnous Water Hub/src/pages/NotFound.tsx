import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-mist px-6">
    <div className="text-center max-w-md">
      <div className="font-heading font-bold text-7xl text-brand mb-4">404</div>
      <h1 className="text-2xl mb-3">Page not found</h1>
      <p className="text-slate mb-8">The page you're looking for doesn't exist or has moved.</p>
      <Link to="/">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </div>
  </div>
);

export default NotFound;
