import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Projects() {
  return (
    <Card sx={{ maxWidth: 445 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
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

  );
}

