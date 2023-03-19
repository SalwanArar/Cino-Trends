import React, {useState} from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Slide from '@mui/material/Slide';
import { Box } from "@mui/system";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

function StartButton() {
const [open, setOpen] = React.useState(false);

const handleClickToOpen = () => {
	setOpen(true);
};

const handleToClose = () => {
	setOpen(false);
};

const [fullName, setFullName] = useState('');
const [email, setEmail] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
const [brief, setBrief] = useState('');

const handleSubmit = (event) => {
  event.preventDefault();
  const formData = {
    fullName: fullName,
    email: email,
    phoneNumber: phoneNumber,
    brief: brief
  };
  const url = 'mailto:info@cinotrends.com?subject=Contact Form Submission';
  window.open(url + '&body=' + JSON.stringify(formData));
};


return (
	<div>
        <Button variant="contained"
                onClick={handleClickToOpen}
                style={{
                    color: 'white'
                }}
                sx={{
                    background: 'linear-gradient(90deg, #26558B 0%, #6DC3BD 100%)',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    borderRadius: '28px',
                    paddingInline: '4rem',
                }}>
            GET STARTED
        </Button>
        <Dialog
        open={open}
        onClose={handleToClose}
        keepMounted
        aria-describedby="dialog for get start our services"
        TransitionComponent={Transition}
        sx={{
            '& .MuiDialog-paper': {
                background: '#6DC3BD'
            }
        }}
        >
            <DialogTitle
                color= 'secondary'
                fontSize= '2.2rem'
                style= {{
                    fontWeight: 'bolder'
                }}
                >
                {"WANT TO GET STARTED?"}
            </DialogTitle>
            <DialogContent>
                <Box
                variant="contained"
                component={'form'}
                onSubmit={handleSubmit}>
                    <CustomTextField
                    label='Full Name'
                    type={'name'}
                    onChange={(event) => setFullName(event.target.value)} />
                    <CustomTextField
                    label='Phone Number'
                    type={'tel'}
                    onChange={(event) => setPhoneNumber(event.target.value)} />
                    <CustomTextField
                    label='Email' 
                    type={'email'}
                    onChange={(event) => setEmail(event.target.value)} />
                    <CustomTextField
                    label='Brief'
                    type={'text'}
                    isMultiLine={true}
                    onChange={(event) => setBrief(event.target.value)} />

                    <DialogActions>
                        <Button
                        aria-label="closes"
                        onClick={handleToClose}
                        variant="contained"
                        style={{
                            color: 'white'
                        }}
                        sx={{
                            background: '#26558B',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            borderRadius: '28px',
                            paddingInline: '4rem',
                        }}>
                            Close
                        </Button>
                        <Button
                                aria-label="submit"
                                variant="contained"
                                autoFocus
                                type="submit"
                                style={{
                                    color: 'white'
                                }}
                                sx={{
                                    background: 'linear-gradient(90deg, #6DC3BD 0%, #26558B 50%, #6DC3BD 100%)',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    borderRadius: '28px',
                                    paddingInline: '4rem',
                                }}
                                >
                            Submit
                        </Button>
                    </DialogActions>
                </Box>
            </DialogContent>
        </Dialog>
	</div>
);
}

function CustomTextField({label, isMultiLine = false, type, onChange}) {
    return (
        <TextField
            label={label}
            type={type}
            color= 'bg'
            fullWidth
            margin='dense'
            required
            multiline={isMultiLine}
            rows={isMultiLine? 4:1}
            onChange={onChange}
            InputLabelProps={{
                style: {
                    fontSize: '1.8rem',
                    fontWeight: '600',
                    paddingRight: '10px'
                }
            }}
            InputProps= {{
                style: {
                    background: 'white',
                    fontSize: '1.8rem',
                }
            }}
        />
    );
}

export default StartButton;