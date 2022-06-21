import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import {Link} from 'react-router-dom'
const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.info.main,
    display: "flex",
    height: "64px",
    alignItems: "center",
    boxShadow: "0px 1px 0px 0px #e0e0e0",
    position: "static",
}));
export const StyledLink = styled(Link)(({ theme }) => ({
    color:"white",
    textDecoration: "none",
}));

export default StyledAppBar;
