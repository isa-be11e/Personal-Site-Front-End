import Link from '@mui/material/Link';
import { darkBody } from '../themes/typography';
import { colours } from '../themes/global';

export default function AccordionLink(props) {
  return (
    <Link href={props.href} target="_blank" sx={{textDecorationColor: colours.darkTeal, ...darkBody}}>
      {props.inner}
    </Link>
)};