import { Avatar, AvatarFallback, AvatarImage } from "@/components-ui/ui/avatar";

const UserAvatar = () => {
  return (
    <div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default UserAvatar;
