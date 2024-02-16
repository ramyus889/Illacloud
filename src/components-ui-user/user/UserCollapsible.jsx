import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components-ui/ui/collapsible";

const UserCollapsible = () => {
  return (
    <div>
      <Collapsible>
        <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
        <CollapsibleContent>
          Yes. Free to use for personal and commercial projects. No attribution
          required.
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default UserCollapsible;
