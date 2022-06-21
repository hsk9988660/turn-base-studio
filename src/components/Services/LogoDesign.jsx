import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Items from '../assets/items.png'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { AiOutlineDownCircle } from "react-icons/ai";
import arrowDown from '../assets/arrowDown.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

export const LogoDesign = () => {

    return (
        <>
            <Box
                sx={{
                    backgroundColor: "#518DF8",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "100% 100%",
                    backgroundSize: 'cover',
                }}>
                <Container>
                    <Grid container spacing={8} >
                        <Grid item xs={12} md={12} lg={6}>
                            <Box>
                                <img
                                    style={{
                                        maxWidth: '100%',
                                        paddingTop: '6%'
                                    }}
                                    src={Items} alt="Items Image" />
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={12} lg={6} >
                            <Box  >
                                <Box color='black'>

                                    <Typography
                                        sx={{
                                            fontSize: "52px",
                                            fontWeight: '400'
                                        }}
                                    >
                                        We will Design <span style={{ color: 'white' }}>Logo</span>  For you.
                                    </Typography>
                                </Box>

                                <Box color='white'
                                    sx={{
                                        borderLeft: '2px solid white',
                                        paddingLeft: '4%',
                                        textAlign: 'left'
                                    }}
                                >
                                    <Typography sx={{ fontSize: '17px', fontWeight: 400 }}>
                                        We listen to your company's story and mission and based on that we build you a
                                        logo that conveys that to the customer. Crafting a logo with us it's more like
                                        a journey we take together. We know you do not always know what you want and
                                        so we expect to work organically back and forth and we built our process around this concept.
                                    </Typography>
                                    <Typography sx={{ fontSize: '17px', fontWeight: 700, my: '6%' }}>
                                        Our Process:
                                    </Typography>
                                    <ol>
                                        <li>We find out all the great things you do and what makes your company unique
                                            <li>
                                                We go over lots of generic sample logos to find elements you really like and why.

                                            </li>
                                            <li>
                                                Concept sketching. At this step we work to create lots of small thumbnail sketches. You get to pick the ones you would like to move forward with.
                                                Now begins the fun part.
                                            </li>
                                            <li>
                                                A little splash of color and a little bit of rework and you get to see those as digital logo drafts. From there you pick two and give us your feedback.

                                            </li>
                                            <li>
                                                Finally you are presented with two completed logos to choose from.</li>

                                        </li>
                                    </ol>
                                </Box>
                                <Box textAlign='left' my={10}>
                                    <Button sx={{
                                        backgroundColor: 'white',
                                        borderRadius: '25px',
                                        px: '3%',
                                        py: '2%',
                                        '&:hover': {
                                            background: "#FFFFFFa2",
                                         },

                                    }} endIcon={<ArrowCircleRightIcon />}>Contact Us</Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>


                    <Box my={6} sx={{ display: { xs: 'none', lg: 'block' } }}>
                        <img src={arrowDown} alt="arrow Down " />
                    </Box>



                    <Grid container spacing={12} color='#FFFFFF' textAlign='left'>
                        <Grid item lg={4} sx={{ display: { xs: 'none', lg: 'block' } }} >
                            <Box>
                                <Typography sx={{
                                    fontSize: '22px',
                                    fontWeight: 400
                                }} >
                                    LOREM IPSUM DOLOR SIT AMET
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '16px',
                                        fontWeight: 400
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item lg={4} sx={{ display: { xs: 'none', lg: 'block' } }} >
                            <Box>
                                <Typography sx={{
                                    fontSize: '22px',
                                    fontWeight: 400
                                }} >
                                    LOREM IPSUM DOLOR SIT AMET
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '16px',
                                        fontWeight: 400
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item lg={4} sx={{ display: { xs: 'none', lg: 'block'} }} >

                            <Box>
                                <Typography sx={{
                                    fontSize: '22px',
                                    fontWeight: 400
                                }} >
                                    LOREM IPSUM DOLOR SIT AMET
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '16px',
                                        fontWeight: 400
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Box my={6} sx={{
                        color: '#FFFFFF',
                        display: {xs: 'flex' ,sm: 'flex', md: 'flex', lg: 'none' },
                        justifyContent: 'space-evenly',
                        py: '6%'
                
                }}>
                        <FacebookIcon/>
                        <TwitterIcon/>
                        <LinkedInIcon/>
                    </Box>
                </Container>
            </Box>
        </>
    )
}