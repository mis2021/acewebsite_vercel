import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Parser from 'html-react-parser';
import { maxHeight } from '@mui/system';
import ScrollContent from 'components/modals/ScrollContent';
import { isBrowser, isMobile } from 'react-device-detect';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardExpand(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, marginTop: '20px', maxHeight: 550, height: 500 }}>
      <CardHeader
        avatar={
          props.icon ?
            <img
              style={{width: 40}}
              src={props.icon}
            />
            :
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              A
            </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={props.title || "ACEMC-BOHOL FACILITY"}
      // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={props.image}
        alt="Paella dish"
      />
      <CardContent sx={isBrowser ? { height: '30%' } : { height: '40%' }}>
        <Typography variant="body2" color="text.secondary">
          <p style={{ textAlign: 'justify' }}>{Parser(props.description) || "No description available"}</p>
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ marginBottom: 0 }} >
        {
          props.content ?
            <ScrollContent
              title={props.title || "ACEMC-BOHOL FACILITY"}
              content={props.content}
            />
            : <></>
        }

        {/* <Button size="small">See More</Button> */}
      </CardActions>
    </Card>
  );
}
