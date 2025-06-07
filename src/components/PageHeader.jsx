import { Box, Divider, Typography } from "@mui/material";

const PageHeader = ({ title = "No title", bgColor = "#05323C" }) => {
  return (
    <Box
      sx={{
        width: "100&",
        display: "flex",
        flexDirection: "column",
        px: 2,
        py: 1,
        borderRadius: 1,
      }}
    >
      <Divider
        sx={{
          borderColor: "#E8E8E8",
          "&::before, &::after": {
            borderColor: "#E8E8E8",
          },
        }}
      >
        <Typography variant="h4" sx={{ width: "100%", color: "#E8E8E8" }}>
          {title}
        </Typography>
      </Divider>
    </Box>
  );
};

export default PageHeader;
