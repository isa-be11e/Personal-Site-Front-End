import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { darkSubtitle, darkBody } from '../../themes/typography';
import { fontSize, colours } from '../../themes/global';
import Image from "next/image";
import Divider from '@mui/material/Divider';
import Link from "next/link";
import groupPic1 from "../../../public/IMG_2697.jpeg";
import pic1 from "../../../public/IMG_6570.jpeg";
import pic2 from "../../../public/IMG_6572.jpeg";
import pic3 from "../../../public/IMG_6574.jpeg";
import pic4 from "../../../public/IMG_6577.jpeg";
import LaunchIcon from '@mui/icons-material/Launch';
import MyCarousel from '../../components/MyCarousel';

const pics = [
  {source: pic1, alt: 'acroyoga bird psoe'},
  {source: pic2, alt: 'acroyoga bow pose'},
  {source: pic3, alt: 'acroyoga chair pose'},
  {source: pic4, alt: 'acroyoga whale pose'},
];

const imageBorder = { border: `2px solid ${colours.darkTeal}` };

const divider = <Divider sx={{mb: 2}} />;

const sections = [
  {
    title: 'What is Acroyoga?',
    body: <Typography sx={darkBody}>
      Acroyoga is a partner/group acrobatic yoga practice that consists of:
      <br /><b>Base</b> - person on the ground
      <br /><b>Flyer</b> - person in the air
      <br /><b>Spotter</b> - ensures the flyers safety
      <br/><br/> Acroyoga consists of static poses and dynamic flows, check out some basic poses below.
    </Typography>,
    carousel: pics,
  },
  {
    title: 'Why Acroyoga?',
    body: <Typography sx={darkBody}>
      I took a class at <Link href='https://artistsplay.com/' target='_blank' style={{textDecoration: 'underline'}}>Artists Play</Link> and instantly fell in love.
      It felt like the perfect bridge between my passion for yoga and strength training.
      Acroyoga is based in trust and communication which fosters an awesome community environment.
      Since starting I've been attending many workshops and refining my skills regularly, even expanding the community by teaching beginners.
    </Typography>,
  },
  {
    title: 'My Journey',
    body: <Typography sx={darkBody}>
      <b>Workshops</b> - I've attended countless workshops, including locally from teachers here in Toronto, at acrocamp, even while traveling!
      There are always new things to learn and ways I can improve my technique.
      <br /><br /><b>Teaching</b> - I taught beginner acroyoga classes in the winter which involved creating lessons, practicing before class, investing in safety equipment, and coordinating with event owners.
      I also taught while I was in Thailand as a work exchange, getting to teach on a beach everyday was amazing!
      <br /><br /><b>Community</b> - I regularly attend acroyoga jams, which are community events where everyone can some together to play.
      I love introducing curious people to acroyoga and showing them the ropes in a safe environment - and also getting to learn from seasoned experts willing to share their knowledge.
      I've also created a Meetup group for acroyoga so the community has a space to announce jams and classes.
    </Typography>,
  },
  {
    title: 'Resources',
    body: <Typography sx={{textDecoration: 'underline', ...darkBody}}>
      <Link href='https://www.meetup.com/acroyoga-toronto/?eventOrigin=home_groups_you_organize' target="_blank">
        Meetup
        <LaunchIcon sx={{ml: 0.5, mb: 0.1, fontSize: 15}}/>
      </Link>
      <br />
      <Link href='https://www.instagram.com/button.belle.acro/' target="_blank">
        Instagram
        <LaunchIcon sx={{ml: 0.5, mb: 0.1, fontSize: 15}}/>
      </Link>
    </Typography>,
  },
];

export default function Acroyoga() {
  return (
    <React.Fragment>
    <Box>
      {sections.map((section, index) => (
        <Box key={index}>
          <Typography sx={{mb: 1, ...darkSubtitle}}>{section.title}</Typography>
          {section.body}
          {section.carousel && <MyCarousel pics={section.carousel} ></MyCarousel>}
          {index < sections.length-1 && <Divider sx={{my: 2}} />}
        </Box>
      ))}
    </Box>
    </React.Fragment>
  );
}