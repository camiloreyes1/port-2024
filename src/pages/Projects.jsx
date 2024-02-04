import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const cardContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  paddingLeft: '12%',
  paddingRight: '12%',
};

const cardStyle = {
  maxWidth: 445,
  marginBottom: '5%',
  flexBasis: 'calc(33.3333% - 20px)', 
};

export default function Projects() {
  return (

    <div>
    <h1 style={{ fontFamily: 'Protest Strike, sans-serif', padding: '12%', paddingBottom: '0%'}}> My Projects</h1>
    <div style={cardContainerStyle}>

    <Card sx={cardStyle}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://res.cloudinary.com/delscyuhi/image/upload/v1695872659/tvptex45kwu0sluvn7nq.png"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          AISeek
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Demo Video</Button>
        <Button size="small">Use App</Button>
      </CardActions>
    </Card>

    <Card sx={cardStyle}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://res.cloudinary.com/delscyuhi/image/upload/v1695871890/qb2hjytc1vxvgxerstal.png"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          MRKT
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Demo Video</Button>
        <Button size="small">Use App</Button>
      </CardActions>
    </Card>

    <Card sx={cardStyle}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image="https://res.cloudinary.com/delscyuhi/image/upload/v1695927673/d89mxo4bugoo0sx2lkv6.png"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pixels
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Demo Video</Button>
        <Button size="small">Use App</Button>
      </CardActions>
    </Card>

    <Card sx={cardStyle}>
        <CardMedia
        component="img"
        alt="green iguana"
        height="270"
        image="https://res.cloudinary.com/delscyuhi/image/upload/v1695871890/t65digbrgsxxjcqllxen.png"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Chicken Run
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Demo Video</Button>
        <Button size="small">Use App</Button>
      </CardActions>
    </Card>
    </div>
        </div>

  );
}

