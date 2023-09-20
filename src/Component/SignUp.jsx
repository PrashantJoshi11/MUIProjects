import React from "react";
import {Avatar, Button, Checkbox, Grid, Paper, Stack, TextField, Typography} from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';

function SignUp(){
    return(
        <Grid >
               <Paper align="center" elevation={3} style={{padding:"25px",width:500,margin:"30px auto"}}>
                    <Avatar sx={{bgcolor:"Orange",margin:"10px 0"}}>
                      <HowToRegIcon></HowToRegIcon>
                    </Avatar>
                    <Typography variant="h4" sx={{bgcolor:"Orange",margin:"10px 0"}}>
                        Sign Up
                    </Typography>
                    <Typography sx={{margin:"20px 0 40px 0"}}>
                        " Please fill this Form"
                    </Typography>
                        <form>
                        <TextField id="FName" label="FirstName" variant="outlined"  fullWidth sx={{margin:"20px 0 25px 0"}} />
                        <TextField id="LName" label="LastName" variant="outlined"  fullWidth sx={{margin:"20px 0 25px 0"}} />
                        <TextField id="mail" label="Mail" variant="outlined"  fullWidth sx={{margin:"20px 0 25px 0"}} />
                        <TextField type="password" id="Pass" label="Password" variant="outlined"  fullWidth sx={{margin:"20px 0 25px 0"}} />
                        <TextField type="Confirm" id="Pass" label="Confirm" variant="outlined"  fullWidth sx={{margin:"20px 0 25px 0"}} />

                        
                        <Checkbox /> I agree On <a href="#">Terms&Condition</a>
                        <Stack direction="row" spacing={40}>
                            <Button variant="contained" color="error">Cancel</Button>
                            <Button variant="contained" color="success">Register</Button>
                        </Stack>

                        </form>

               </Paper>
        </Grid>
    );
}
export default SignUp;