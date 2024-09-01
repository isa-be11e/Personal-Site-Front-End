import Typography from '@mui/material/Typography';
import { darkBody } from '../../themes/typography';

export default function AccordionBody(props) {
  return (
    <Typography sx={darkBody}>{props.children}</Typography>
)};