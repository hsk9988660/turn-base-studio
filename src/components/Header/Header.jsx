import StyledAppBar, { StyledDrawer} from "./styledAppbar";
import {Container, Toolbar, Box, Button, Drawer, List, ListItemButton, ListItemText, IconButton} from "@mui/material";
import style from './Header.module.scss'
import {StyledLink} from "./styledAppbar"
import {useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {NavLink} from "react-router-dom";

export const Appbar = ()=>{
    const [anchorMenuDrawer, setAnchorMenuDrawer] = useState(false);
    const [openDrawerTokens, setOpenDrawerTokens] = useState(false);
    const [openDrawerNFTs, setOpenDrawerNFTs] = useState(false);

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
    const handleClickFanMenuDrawer = () => {
        setOpenDrawerNFTs(!openDrawerNFTs);
    };
    const links = [
        {
            label: "Home",
            link: "/",
        },
        {
            label: "About",
            link: "about",
        },
        {
            label: "Services",
            link: "services",
        },
        {
            label: "PortFolio",
            link: "portfolio",
        },
        {
            label: "Contact",
            link: "contact",
        },
    ];

    const portFolioDropDown = [
        {
            label: "Logo Design",
            link: "logo",
        },
        {
            label: "Branding Guide",
            link: "about",
        },
        {
            label: "Branding Clothing",
            link: "services",
        },
        {
            label: "Web and Apps",
            link: "portfolio",
        },
        {
            label: "Marketing and Seo",
            link: "contact",
        },
    ]
    return (
        <StyledAppBar>
            <Box sx={{width:"100%"}}>
           <Toolbar disableGutters sx={{ justifyContent: "end" ,mr:{md:"0px",lg:8}}}>
               {/*<img src={logoImage} alt="no image"/>*/}
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
               </Box >
                   <Box sx={{mb:5}}>
                   <StyledLink to="contact" >
                   <Button sx={{color:"white",ml:"60px"}}>
                       Contact
                   </Button>
                   </StyledLink>
                   </Box>
               </Box>
               <Button
                   aria-label="menu"
                   className={style.menueIcon}
                   onClick={handleOpenMenuDrawer}
                   sx={{color:"black",ml:"60px",display:{sm:"flex",md:"flex",lg:"none"}}}
               >
                   <MenuIcon fontSize="large" />
               </Button>
               <StyledDrawer
                   anchor="right"
                   open={openFanMenuDrawer}
                   onClose={() => setAnchorMenuDrawer(false)}
               >
                   <List className={style.menueList} component="nav">
                       <IconButton
                           aria-label="menu"
                           onClick={handleCloseMenuDrawer}
                           sx={{color:"white",float:"right",mr:1}}
                       >
                           <CloseIcon />
                       </IconButton>

                       <Box sx={{ml:3,mt:6}}>
                       {links.map((item, index) => (
                           <NavLink
                               to={item.link}
                               className={style.linkUnderline}
                               target="_blank"
                               key={`link_${index}`}
                           >
                               {item.label === "Services" ? "" :
                                   <ListItemButton className={style.headingColor}>
                                       <ListItemText
                                           primaryTypographyProps={{style: {fontWeight: 600}}}
                                           primary={
                                               <Box>
                                                   <NavLink
                                                       to={item.link}
                                                       className={style.linkUnderline}
                                                       target="_blank"
                                                   >
                                                       {item.label === "Services" ? "" : item.label}
                                                   </NavLink>
                                               </Box>
                                           }
                                       />
                                   </ListItemButton>
                               }
                           </NavLink>
                       ))}
                       </Box>
                   </List>
                   </StyledDrawer>
           </Toolbar>
            </Box>
        </StyledAppBar>
    )
}