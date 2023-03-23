import { PlayArrow } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";


function AboutUsComponent ({ title, items, icon }) {
    return(
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '1500px',
            margin: "10rem auto",
        }}>
            <Typography
            variant="h2"
            align="center"
            sx={{
                borderRadius: '4rem',
                justifySelf: 'center',
                p: '1rem 3rem',
                m: '3rem',
                background: '#6DC3BD',
                color: "#090F24",
                border: 'groove #6DC3BD ',
                boxShadow: '1px 1px 5px #090F24',
            }}>
                { title }
            </Typography>
            <Box>
                {
                    items.map((item) =>
                        <Box sx={{ display: 'flex', marginBottom: '2rem', alignItems: 'baseline' }}>
                            { icon }
                            <Typography
                            variant="p"
                            sx={{
                                fontSize: "2rem",
                                textAlign: 'justify',
                                marginLeft: '1rem',
                              }}>
                                   { item }
                            </Typography>
                        </Box>
                    )
                }
            </Box>
        </Box>
    );
}

function AboutUs () {
    const components = [
        {
            title: 'WHO WE ARE',
            items: [
                'Cino Trends is an Emirati company established in 2021, specializes in advertising and digital marketing.',
                'We have gathered passionate expertise to provide diverse services in the world of digital marketing, which includes, Google marketing, social media platforms setup and management, followers support and growth, developing strategic plans and calculated marketing campaigns, visual identity and character design, motion graphic videos and many other services presented through our experts in marketing, design, animation, and content writing to ensure quality, integrity, and efficiency.'
            ],
        },
        {
            title: 'Our Services',
            icon: <PlayArrow sx={{ color: '#6DC3BD' }}/>,
            items: [
                <>
                    <span style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2rem' }}>Voice Over: </span><br />
                    {/* <Box sx={{marginLeft: '4rem', fontSize: '2rem'}}> */}
                    In the marketing world, sound plays an essential role to attract attention or to make your clients feel connected to your service or product. Therefore, beautiful voices make your advertisement look alive.
                    <br />Voice over is not just an audio reading, it gives life to the text, and emphasizes details that may be hidden from the listener or the viewer.
                    <br />Cino Trends has established a professional studio with the best and latest equipment to ensure that you have a unique voice over that serves your projects and attracts your target audience, link them with your products
                    {/* </Box> */}
                </>,
                <>
                    <span style={{ fontWeight: 'bold', fontSize: '2rem' }}>Website Design: </span>
                    Your website is the main interface that attracts clients to find out about the company and explore your products. Now adays, it is no longer possible to own a business without having a website. 
                    <br />Cino Trends has a team of dedicated UX/UI developers to present your company professionally and efficiently.                
                </>,
                <>
                    <span  style={{ fontWeight: 'bold', fontSize: '2rem' }}>Script Writing: </span>
                    The content is the beating heart of marketing. It is the most important tool to connect and interact with your fans, it is the key element in your game to attract audience.
                    <br />At Cino Trends, we have the best team of professional and talented writers to produce the most appealing content to your business and ensure success.
                </>,
                <>
                    <span style={{ fontWeight: 'bold', fontSize: '2rem' }}>Digital Marketing: </span>
                    We have a team of diligent digital experts with several years of experience in the field to help you reach your target audience and enhance your presence on social media platforms.
                </>,
                <>
                    <span style={{ fontWeight: 'bold', fontSize: '2rem' }}>Animation: </span>
                    Cartoons and Animation has been a part of our memories as children. Therefore, the world today is racing to utilize animation in several fields.
                    <br />Based on the significance of animation and its huge influence, Cino Trends provides professional animation service to promote your brand and make it relatable to your target audience.
                </>,
                <>
                    <span style={{ fontWeight: 'bold', fontSize: '2rem' }}>Character Design: </span>
                    To create a unique character to your brand, to distinguish yourself from other competitors, and to get closer to your audience, Cino Trends present you the character design service. With our specialists in the field of animation you can get your own exclusive character.
                </>,
                <>
                    <span style={{ fontWeight: 'bold', fontSize: '2rem' }}>Graphic Design: </span>
                    People get hooked by extraordinary notions especially the ones that leave an impact on them. Hence, graphic design identifies the client from their industry competitors.
                    <br />Knowing that great designs stick in the mind of the viewers, we established a team of artistic and talented designers that draw unique visuals to your products and services, and make them well-known and distinctive.
                </>,
                <>
                    <span style={{ fontWeight: 'bold', fontSize: '2rem' }}>Motion Graphic: </span>
                    Our talented motion graphic team provides high quality service that attracts your audience and connects them with your brand.
                </>,
                <>
                    <span style={{ fontWeight: 'bold', fontSize: '2rem' }}>Professional Photography: </span>
                    We have a professional photography service with the latest equipment, managed by talented experts in the photography world, to present your products efficiently.
                </>,
            ]
        }
    ];
    return (
        <Box
        component={ 'div' }
        sx={{ 
            background: 'linear-gradient(180deg, #6DC3BD 11.44%, #26558B 50.64%, #6DC3BD 93.37%)',
            color: 'white',
        }}>
            <Header />
            { components.map((component) => <AboutUsComponent title={component.title} items={component.items} icon={component.icon}/>) }
            <Footer />
        </Box>
    );
}

export default AboutUs;