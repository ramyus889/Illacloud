import { Alert, AlertDescription, AlertTitle } from "@/components-ui/ui/alert";
import { Terminal } from "lucide-react";
const UserAlert = () => {
  return (
    <div>
      <Alert className="text-white">
        <Terminal className="h-4 w-4 " />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default UserAlert;
