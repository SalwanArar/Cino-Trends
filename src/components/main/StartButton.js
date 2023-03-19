import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
// import Slide from '@mui/material/Slide';
// import styled from '@mui/material/styles/styled';

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });



// const CssTextField = styled(TextField)({
//     '& label.Mui-focused': {
//         color: 'white',
//         fontSize: '1.5rem',
//     },
//     '& .MuiInput-underline:after': {
//         borderBottomColor: 'green',
//         borderColor: 'red',
//     },
//     '& .MuiOutlinedInput-root': {
//         '& fieldset': {
//         borderColor: 'white',
//         color: 'white   '
//         // background: 'white'
//         },
//         '&:hover fieldset': {
//         borderColor: 'primary',
//         color: 'blue'
//         },
//         '&.Mui-focused fieldset': {
//         borderColor: 'primary',
//         },
//     },
// });

function StartButton() {
const [open, setOpen] = React.useState(false);

const handleClickToOpen = () => {
	setOpen(true);
};

const handleToClose = () => {
	setOpen(false);
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
            sx={{
                '& .MuiDialog-paper': {
                    background: '#6DC3BD'
                }
            }}
        >
            {/* <div className="dialog-backgound"> */}
            <DialogTitle
                color= 'secondary'
                fontSize= '2.2rem'
                style= {{
                    fontWeight: '500'
                }}
                >
                {"WANT TO GET STARTED?"}
            </DialogTitle>
            <DialogContent>
            {customTextField('Test')}
            {customTextField('Test')}
            {customTextField('Test')}
            {customTextField('Test')}
            </DialogContent>
            <DialogActions>
                <Button
                        aria-label="closes"
                        onClick={handleToClose}
                        variant="contained"
                        autoFocus
                        style={{
                            color: 'white'
                        }}
                        sx={{
                            background: 'linear-gradient(90deg, #26558B 0%, #6DC3BD 100%)',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            borderRadius: '28px',
                            paddingInline: '4rem',
                        }}
                        >
                    Close
                </Button>
            </DialogActions>
            {/* </div> */}
        </Dialog>
	</div>
);
}

function customTextField(label) {
    return (
        <TextField
            label={label}
            color= 'bg'
            fullWidth
            // fontSize= '1.8rem'
            margin='dense'
            InputLabelProps={{
                style: {
                    // color: '#090F24',
                    fontSize: '1.8rem',
                    fontWeight: 'bolder',
                    paddingRight: '10px'
                }
            }}
            InputProps= {{
                style: {
                    background: 'white',
                    fontSize: '1.8rem',
                    // color: 'white'
                }
            }}
        />
    );
}

export default StartButton;