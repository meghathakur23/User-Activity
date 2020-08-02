import Avatar from "@material-ui/core/Avatar";
import PublicIcon from "@material-ui/icons/Public";
import Chip from "@material-ui/core/Chip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import EditUserForm from "../../modals/editUserForm/index";

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: "100%",
  },
}));

export default function UserCardView(props) {
  const classes = useStyles();
  const { user_details, ...other } = props;
  const { id, real_name, tz } = user_details;

  return (
    <List
      aria-labelledby="nested-list-subheader"
      className={classes.root}
      component="nav"
    >
      <ListItem button id={id}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <ListItemIcon>
              <Avatar alt={real_name} />
              <ListItemText primary={real_name} textcolor="primary" />
            </ListItemIcon>
          </Grid>
          <Grid item xs={3}>
            <ListItemText>
              <EditUserForm current_user={user_details} {...other} />
            </ListItemText>
          </Grid>
          <Grid item xs={3}>
            <ListItemText primary={real_name} textcolor="primary" />
          </Grid>
          <Grid item xs={3}>
            <ListItemIcon>
              <Chip
                avatar={
                  <Avatar>
                    {" "}
                    <PublicIcon />{" "}
                  </Avatar>
                }
                label={tz}
              />
            </ListItemIcon>
          </Grid>
        </Grid>
      </ListItem>
    </List>
  );
}
