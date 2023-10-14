import makeStyles from "@mui/styles/makeStyles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import useSearchOps from "../../hooks/useSearchOps";
import Item from "./Item";

const useStyles = makeStyles({
  root: {
    position: "relative"
  },
  textField: {
    display: "block",
    margin: "auto"
  },
  list: {
    position: "absolute",
    // top: 55,
    // left: 0,
    maxHeight: 206,
    overflowY: "scroll",
    border: "1px solid #ababab"
  }
});

const style = {
  width: "100%",
  bgcolor: "background.paper"
};

export default function SearchBox() {
  const { handleSearch, searchedUsers } = useSearchOps();
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Typography variant="h6" component="h6" sx={{ my: 2 }}>
          Search for a user
        </Typography>
        <TextField
          // defaultValue={text}
          className={classes.textField}
          placeholder="Search by Username"
          onChange={handleSearch}
          fullWidth
        />
        {searchedUsers.length > 0 && (
          <List sx={style} className={classes.list}>
            {searchedUsers.map((user) => (
              <Item key={user.id} user={user} />
            ))}
          </List>
        )}
      </Box>
    </>
  );
}
