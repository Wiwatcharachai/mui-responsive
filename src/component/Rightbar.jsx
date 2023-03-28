import { Box } from "@mui/material";
import React from "react";

function Rightbar() {
  return (
    <Box
      bgcolor="Green"
      flex={2}
      p={2}
      sm={{ display: { xs: "none", sm: "block" } }}
    >
      Rightbar
    </Box>
  );
}

export default Rightbar;
