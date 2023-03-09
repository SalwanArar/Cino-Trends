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
                onClick={handleClickToOpen}>
            GET STARTED
        </Button>
        <Dialog
            open={open}
            onClose={handleToClose}
            keepMounted
            // style={{}}
            // TransitionComponent={Transition}
            aria-describedby="dialog for get start our services"
            sx={{
                // backgroundColor: 'red',
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
            {/* <CssTextField
                margin="dense"
                id="name"
                label="Full Name"
                type="none"
                fullWidth
                required
                // variant="outlined"
            />
            <TextField
                margin="dense"
                InputProps={{
                    maxLength: 10,
                    style: {
                        fontSize: '2rem',
                        background: 'white',
                        color: 'black',
                    },
                    maxRows: 5
                }}
                InputLabelProps={{
                    style: {
                        fontSize: '2rem',
                        color: '#000',
                        fontWeight: 'bold'
                    }
                }}
                maxLength= {256}
                id= "contact"
                label= "Contact Numbere"
                type= "phoneNumber"
                color= "primary"
                fullWidth
                required
                // InputLabelProps={'font-size'= '16rem'}
                variant="outlined"
            />
            <TextField
                margin="dense"
                id="email"
                label="Email"
                type="email"
                size="medium"
                color="secondary"
                fullWidth
                required
                variant="outlined"
            />
            <TextField
                margin="dense"
                id="brief"
                label="Brief"
                type="text"
                color="white"
                fullWidth
                required
                variant="standard"
                // maxRows= {4}
                // minRows= {4}
                // maxLength= {255}
            /> */}
            {customTextField('Test')}
            {customTextField('Test')}
            {customTextField('Test')}
            {customTextField('Test')}
            </DialogContent>
            <DialogActions>
                <Button
                        aria-label="closess"
                        onClick={handleToClose}
                        variant="contained"
                        color="secondary"
                        autoFocus
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