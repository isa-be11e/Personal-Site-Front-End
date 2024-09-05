import Link from '@mui/material/Link';
import { darkBody } from '../../themes/typography';
import { colours, fontSize } from '../../themes/global';
import LaunchIcon from '@mui/icons-material/Launch';

const launchIcon = <LaunchIcon sx={{ml: 0.5, mb:-0.3, fontSize: fontSize.responsive.med}}/>;

export default function AccordionLink(props) {
  return (
    <Link href={props.href} target="_blank" sx={{textDecorationColor: colours.primaryText, fontWeight: 'normal', ...darkBody}}>
      {props.children}
      {!!props.resource && launchIcon}
    </Link>
)};