import { memo } from "react";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { User } from "../../types/global.types";
import useSearchOps from "../../hooks/useSearchOps";

type ListItemProps = {
  user: User & { shouldRestore: boolean };
};

function Item(props: ListItemProps) {
  const { user } = props;
  const { handleRestore } = useSearchOps();
  return (
    <ListItem key={user.id} button divider>
      <ListItemText primary={`${user.name} (${user.username})`} />

      {user.shouldRestore && (
        <Button
          variant="contained"
          size="small"
          onClick={() => handleRestore(user.id)}
        >
          Restore
        </Button>
      )}
    </ListItem>
  );
}

export default memo(Item);
