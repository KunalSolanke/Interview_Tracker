import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicInput({label,type,endAdorment,showPassword,hidePassword,mystyles,large,...otherprops}) {
  const classes = useStyles();

  return (
<<<<<<< HEAD
    <TextField className={`{mystyles?'styledInput':''} {large?'large':''}`} id="outlined-basic" type={type} label={label} password variant="outlined"  InputProps={{
=======
    <TextField className={mystyles} id="outlined-basic" type={type} label={label} password variant="outlined"  InputProps={{
>>>>>>> e82d7e2f9c802178684e92318ab39adbe3a83229
        endAdornment:
            <InputAdornment position="end">
                {endAdorment?<InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={showPassword}
                >
                  {!hidePassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>:null}
            </InputAdornment>
      }}
      {...otherprops}
      />
  );
}
