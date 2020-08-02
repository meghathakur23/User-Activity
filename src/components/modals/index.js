import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import HistoryIcon from '@material-ui/icons/History';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom'

export default function ActivityPeriods(props) {
  const [open, setOpen] = React.useState(false);
  const { id, real_name, activity_periods } = props.current_user
  
  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" size="small" edge="end" aria-label="edit" onClick={() => setOpen(true)}>
          Show activity
      </Button>
      <Dialog fullWidth open={open} aria-labelledby="form-dialog-title">
        <DialogContent>
          <ListItem>
            <ListItemIcon>
              <Avatar alt={real_name} src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" />
            </ListItemIcon>
          </ListItem>
          <br/>
          {
            activity_periods.map((activity,i)=>{
              return(
                <ListItem id={id} key={i}>
                  <ListItemIcon>
                    <Avatar> <HistoryIcon style={{color:"gary"}} /></Avatar>
                  </ListItemIcon>
                  <ListItemText> <span style={{color:"gray"}}>{activity.start_time}</span> to <span style={{color:"gray"}}>{activity.end_time}</span> </ListItemText>
                </ListItem>
              )
            })
          }
          <DialogActions>
              <Button onClick={() => setOpen(false)} color="primary"> Close </Button>
              <Button component={Link} to={{     
                  pathname: '/all',
                  activity_periods
                }}
                color="primary" type="submit"> View all </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
