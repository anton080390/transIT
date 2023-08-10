import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { DEFAULT_IMAGE } from "../constants/constants";

export default function SingleCard({
  id,
  title,
  description,
  image = DEFAULT_IMAGE,
  status,
  makeClick,
}) {
  const handleClick = (title) => {
    console.log(`${title} has been clicked`);
  };
  return (
    <Card sx={{ maxWidth: 345, "& :hover": { backgroundColor: "red" } }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
            {status === "ended" && (
              <span
                style={{
                  border: "1px solid red",
                  color: "red",
                  margin: "10px",
                }}
              >
                Ended
              </span>
            )}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <button onClick={() => makeClick(id)}>Click me!</button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
