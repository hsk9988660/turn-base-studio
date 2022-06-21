import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import {Link} from 'react-router-dom'
import {Container, Drawer} from "@mui/material";
const StyledAppBar = styled(AppBar)(({ theme }) => ({
    background: "#518DF8",
    display: "flex",
    height: "64px",
    alignItems: "center",
    boxShadow: "0px 1px 0px 0px #518DF8",
    position: "static",
    width:"100%"
}));
export const StyledLink = styled(Link)(({ theme }) => ({
    color:"white",
    textDecoration: "none",
}));
export const StyledDrawer = styled(Drawer)`
& .MuiPaper-root{
  background-color: black;
  height: 100vh;
}
  
`;
export const StyledContainer = styled(Container)`
  ${props => props.theme.breakpoints.up("lg")} {
    & .MuiContainer-root {
      max-width: 1500px;
    }
  }
  
`;


export default StyledAppBar;
