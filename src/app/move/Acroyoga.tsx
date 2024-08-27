import groupPic1 from "../../../public/IMG_2697.jpeg";
import pic1 from "../../../public/IMG_6570.jpeg";
import pic2 from "../../../public/IMG_6572.jpeg";
import pic3 from "../../../public/IMG_6574.jpeg";
import pic4 from "../../../public/IMG_6577.jpeg";
import AccordionLink from '../../components/AccordionLink';
import AccordionDetailBody from '../../components/AccordionDetailBody';

const acroPoses = [
  {source: pic1, alt: 'acroyoga bird pose'},
  {source: pic2, alt: 'acroyoga bow pose'},
  {source: pic3, alt: 'acroyoga chair pose'},
  {source: pic4, alt: 'acroyoga whale pose'},
];

const groupPics = [
  {source: groupPic1, alt: 'group acroyoga pose that resembles a star'},
];

const resources = [
  {href:'https://www.meetup.com/acroyoga-toronto/', text:'Meetup'},
  {href:'https://www.instagram.com/button.belle.acro/', text:'Instagram'},
];

const sections = [
  {
    title: 'What is Acroyoga?',
    body: <AccordionDetailBody pics={acroPoses}>
      Acroyoga is a partner/group acrobatic yoga practice that consists of:
      <br/><b>Base</b> - person on the ground
      <br/><b>Flyer</b> - person in the air
      <br/><b>Spotter</b> - ensures the flyers safety
      <br/><br/>
      Acroyoga consists of static poses and dynamic flows, check out some basic poses below.
    </AccordionDetailBody>
  },
  {
    title: 'Why Acroyoga?',
    body: <AccordionDetailBody>
      I took a class at <AccordionLink href='https://artistsplay.com/'>Artists' Play</AccordionLink>.
      It felt like the perfect bridge between my passion for yoga and strength training.
      Acroyoga is based in trust and communication which fosters an awesome community environment.
      Since starting I've been attending many workshops and refining my skills regularly, even expanding the community by teaching beginners.
    </AccordionDetailBody>
  },
  {
    title: 'My Journey',
    body: <AccordionDetailBody pics={groupPics}>
      <b>Workshops</b> - I've attended countless workshops, including locally from teachers here in Toronto, at acrocamp, even while traveling!
      There are always new things to learn and ways I can improve my technique.
      <br/><br/>
      <b>Teaching</b> - I taught beginner acroyoga classes in the winter which involved creating lessons, practicing before class, investing in safety equipment, and coordinating with event owners.
      I also taught while I was in Thailand as a work exchange, getting to teach on a beach everyday was amazing!
      <br/><br/>
      <b>Community</b> - I regularly attend acroyoga jams, which are community events where everyone can some together to play.
      I love introducing curious people to acroyoga and showing them the ropes in a safe environment - and also getting to learn from seasoned experts willing to share their knowledge.
      I\'ve also created a Meetup group for acroyoga so the community has a space to announce jams and classes.
    </AccordionDetailBody>,
  },
  {
    title: 'Resources',
    body: <AccordionDetailBody resources={resources} />
  },
];

export default sections;