import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import BasicMenu from "./BasicMenu";

const Navbar = ({ email }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
              <Toolbar>
                  <BasicMenu />
        </Toolbar>
        <button>{email ? email : "Nie zalogowany"}</button>
      </AppBar>
    </Box>
  );
};

export default Navbar;
