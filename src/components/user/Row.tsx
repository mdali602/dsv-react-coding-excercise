import Box from "@mui/material/Box";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    display: "flex"
  }
});

type RowProps = {
  children: React.ReactNode;
};

export default function Row(props: RowProps) {
  const classes = useStyles();
  return <Box className={classes.root}>{props.children}</Box>;
}
