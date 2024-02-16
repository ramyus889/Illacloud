import { Button } from "@/components-ui/ui/button";

const UserButton = ({ children }) => {
  return (
    <div>
      <Button variant="outline" className="rounded-[30px]">
        {children}
      </Button>
    </div>
  );
};

export default UserButton;
