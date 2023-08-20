/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alert, Snackbar } from "@mui/material";

const Notify: React.FC<{children: any, open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>, type: 'success' | 'error'}> = ({children, open, setOpen, type}) => {
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
                {children}
            </Alert>
        </Snackbar>
    )
}

export default Notify;