import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'transparent', p: 6 }} component="footer">
            <Typography
                variant="subtitle1"
                align="center"
                component="p"
            >
                Made with ❤️ by Gabriele Serafini
            </Typography>
        </Box>
    );
}

export default Footer