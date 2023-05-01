import { Button } from "@mui/material";

export default function Test(): JSX.Element {
  return (
    <div>
      Test
      <span>extra bold</span>
      <p>Futura</p>
      <h1> heading 1</h1>
      <h2> heading 2</h2>
      <h3> heading 3</h3>
      <p> paragraph </p>
      <div style={{ border: "1px solid red" }}>
        mui button
        <Button variant="contained">Disabled</Button>
      </div>
    </div>
  );
}
