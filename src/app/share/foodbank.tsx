import food_bank from "../../../public/food_bank.jpeg";
import food_bank_1 from "../../../public/food_bank_1.jpeg";
import AccordionDetailBody from '../../components/accordion/AccordionDetailBody';

const pics = [
   {source: food_bank_1, alt: 'Volunteers at the Toronto Vegetarian Food Bank'},
   {source: food_bank, alt: 'fruits and vegetables on a table'},
 ];

const resources = [
  {href:'https://www.vegfoodbank.com/', text:'Food Bank Website'},
  {href:'https://www.instagram.com/veganfoodbank/', text:'Food Bank Instagram'}
];

const sections = [
  {
    title: 'Why Do I Volunteer?',
    body: <AccordionDetailBody>
      I believe that if I have the time, energy and mental capacity to help others I should.
      I've volunteered previously at a retirement home, Science Rendezvous event, and the Digital for Good hackathon.
      I was hoping to find something more consistent that worked with my schedule so I'm very grateful to have found a place to volunteer on a regular basis at the food bank.
    </AccordionDetailBody>
  },
{
    title: 'Vegetarian Food Bank',
    body: <AccordionDetailBody pics={pics}>
      I found out about the vegetarian food bank and their mission at a film event.
      I started volunteering there not long after and haven't looked back since.
      The food bank is incredibly well organized and has such a great impact on so many people in the city.
      It's one of the few food banks in the city that offers clients fresh fruit and vegetables.
      Clients that come in get a meal and groceries which are laid out on tables.
      I help out with setting up the grocery area, prepping the meal, taking people around to offer groceries, and cleaning up.
    </AccordionDetailBody>
  },
  {
    title: 'Resources',
    body: <AccordionDetailBody resources={resources} />
  },
];

export default sections;