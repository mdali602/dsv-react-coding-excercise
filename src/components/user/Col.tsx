import Typography from "@mui/material/Typography";

type ColProps = {
  text: string | number;
  color?: string;
};

export default function Col(props: ColProps) {
  const { text, color } = props;
  return (
    <Typography sx={{ fontSize: 16 }} color={color}>
      {text}
    </Typography>
  );
}
