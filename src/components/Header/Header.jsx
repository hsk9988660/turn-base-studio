import StyledAppBar from "./styledAppbar";
import {Container, Toolbar, Box, Button, Drawer, List} from "@mui/material";
import style from './Header.module.scss'
import {StyledLink} from "./styledAppbar"
import {useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";

export const Appbar = ()=>{
    const [anchorMenuDrawer, setAnchorMenuDrawer] = useState(false);

    const openFanMenuDrawer = Boolean(anchorMenuDrawer);
    const handleOpenMenuDrawer = () => {
        setAnchorMenuDrawer(true);
    };
    const handleCloseMenuDrawer = () => {
        setAnchorMenuDrawer(false);
    };
    const handleClickTokensMenuDrawer = () => {
        setOpenDrawerTokens(!openDrawerTokens);
    };
    return (
        <StyledAppBar>
       <Container>
           <Toolbar disableGutters sx={{ justifyContent: "end" }}>
               <Box className={style.boxDisplay}>
               <Box>
                   <StyledLink to="/" >
                       Home
                   </StyledLink>
               </Box>
               <Box sx={{ml:"60px"}}  >
                   <StyledLink to="about" >
                       About
                   </StyledLink>
               </Box>
               <Box sx={{ml:"60px"}} >
                   <StyledLink to="services" >
                       services
                   </StyledLink>
               </Box >
               <Box sx={{ml:"60px"}}  >
                   <StyledLink to="portfolio" >
                       portfolio
                   </StyledLink>
               </Box>
                   <Button>
                       Contact
                   </Button>
               </Box>
               <Button
                   aria-label="menu"
                   className={style.menueIcon}
                   onClick={handleOpenMenuDrawer}
               >
                   <MenuIcon fontSize="large" />
               </Button>
               <Drawer
                   anchor="right"
                   open={openFanMenuDrawer}
                   onClose={() => setAnchorMenuDrawer(false)}
               >
                   <List className={style.menueList} component="nav">
                       <ListItemButton
                           onClick={handleClickFanMenuDrawer}
                           className={style.headingColor}
                       >
                           <ListItemText
                               primary="NFT Rankings"
                               primaryTypographyProps={{ style: { fontWeight: 600 } }}
                           />
                       </ListItemButton>
                   </List>
                   </Drawer>
           </Toolbar>
       </Container>
        </StyledAppBar>
    )
}