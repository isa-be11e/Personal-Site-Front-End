import cookingAttire from "../../../public/cooking_class.jpeg";
import phylloQuiche from "../../../public/cooking_class_1.jpeg";
import soba from "../../../public/cooking/soba.jpeg";
import frittata from "../../../public/cooking/frittata.jpeg";
import pic3 from "../../../public/vietnam_cooking.jpeg";
import pic4 from "../../../public/vietnam_cooking_1.jpeg";
import AccordionDetailBody from '../../components/AccordionDetailBody';

const GBPics = [
   {source: cookingAttire, alt: 'Isabelle standing in front of a cutting board while at her George Brown Culinary Course', text: 'Course Attire'},
   {source: phylloQuiche, alt: 'Phyllo and quiche made in George Brown Culinary Course', text: 'Phyllo nad Quiche'},
   {source: soba, alt: 'Soba Noodle Salad', text: 'Soba Noodle Salad'},
   {source: frittata, alt: 'Eggless Frittata', text: 'Frittata'},
 ];

const vietnamPics = [
  {source: pic3, alt: 'Isabelle standing on a street in Hoi An, Vietnam', text: 'Vietnam'},
  {source: pic4, alt: 'Vietnamese savoury pancake', text: 'Vietnamese Pancake'},
];

const thailandPics = [
  {source: pic3, alt: 'Isabelle standing on a street in Hoi An, Vietnam', text: 'Vietnam'},
];

const resources = [
  {href:'https://coned.georgebrown.ca/courses-and-programs/vegetarian-culinary-arts-1', text:'George Brown Course'},
  {href:'https://chickpeaeatery.com/authentic-vietnamese-vegan-hoi-an-cooking-class/', text:'Hoi An, Vietnam Class'},
  {href:'https://www.maykaidee.com/cooking-school', text:'Chiang Mai, Thailand Class'},
];

const sections = [
  {
    title: 'Why do I Love Cooking?',
    body: <AccordionDetailBody>
      I love to tinker and get creative in the kitchen because food has so many interesting properties like texture, taste, and nutritional value.
      While I enjoy playing around, I'm also a creature of habit and have my staples as well as meal prep often.
      I love to learn about new foods and techniques that I can incorporate into my kitchen.
      I took a course here in Toronto as well as some classes while traveling too, it was amazing to combine my passion for traveling and cooking!
    </AccordionDetailBody>
  },
{
    title: 'George Brown',
    body: <AccordionDetailBody pics={GBPics}>
      I took a culinary arts course at George Brown College during the evening while working.
      I wanted to improve my existing culinary skills to make my time in the kitchen more efficient and fun.
      It was awesome to learn from a teacher with many years of industry experience.
      Among so many things I learned how to make a reduction sauce, julienne vegetables, use phyllo, create eggless frittatas and quiches!
    </AccordionDetailBody>
  },
  {
    title: 'Vietnam',
    body: <AccordionDetailBody pics={vietnamPics}>
      While I was in Hoi An, Vietnam I ate at an amazing restaurant and saw they offer a cooking class.
      I thought it would be an amazing way to learn more about Vietnamese food and culture.
      It was so interesting to go to the local market and pick up the ingredients for class, trying various treats along the way.
      We made spring rolls, "chicken" salad made from tofu and seitan, and vietnamese pancakes - savory pancakes served with greens and vermicelli noodles.
      TODO: MORE
    </AccordionDetailBody>,
  },
  {
    title: 'Thailand',
    body: <AccordionDetailBody pics={thailandPics}>
      I loved the cooking class in Vietnam so much that when I was in Chiang Mai, Thailand I took another.
      I had been eating Thai food up til then as we have a good selection in Toronto as well, so it was very interesting to learn more about the ingredients.
      TODO: MORE + PICS
    </AccordionDetailBody>
  },
  {
    title: 'Resources',
    body: <AccordionDetailBody resources={resources} />
  },
];

export default sections;