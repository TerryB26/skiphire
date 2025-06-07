import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Grid, Card, Divider } from "@mui/material";
import { MdOutlineExpandCircleDown } from "react-icons/md";

const CustomAccordion = ({ title, description, items, expanded, onChange }) => {
  const [selected, setSelected] = useState([]);

  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Accordion
        expanded={expanded}
        onChange={onChange}
        sx={{
          width: 1400,
          backgroundColor: "#1a1f2e",
          color: "#fff",
          borderRadius: 5,
          overflow: "hidden",
        }}
      >
        <AccordionSummary
          expandIcon={<MdOutlineExpandCircleDown color="#fff" size={32} />}
          sx={{
            backgroundColor: "#1a1f2e",
            borderBottom: "1px solid #333",
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          }}
        >
          <Typography variant="h6" sx={{ fontSize: "1.2rem", color: "#fff" }}>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          }}
        >
          <Box
            sx={{
              mb: 2,
              mt: 1,
              color: "#333",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            {description}
          </Box>
          <Grid container spacing={3} justifyContent="center" alignItems="stretch">
            {items && items.length > 0 ? (
              items.map((item) => (
                <Grid item xs={12} sm={6} md={3} key={item.id} sx={{ display: "flex" }}>
                  <Card
                    onClick={() => handleSelect(item.id)}
                    sx={{
                      width: "100%",
                      minHeight: 160,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "stretch",
                      justifyContent: "flex-start",
                      boxShadow: "4px 4px 12px 0 rgba(0, 0, 0, 0.15), -4px 4px 12px 0 rgba(0, 0, 0, 0.1)",
                      p: 0,
                      border: selected.includes(item.id)
                        ? "2px solid #11243f"
                        : "2px solid transparent",
                      cursor: "pointer",
                      transition: "border 0.2s",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 2,
                        pb: 1,
                        backgroundColor: "rgba(58,80,107,0.4)",
                        borderTopLeftRadius: 4,
                        borderTopRightRadius: 4,
                      }}
                    >
                      <Box sx={{ mr: 1, fontSize: 28, display: "flex", alignItems: "center" }}>
                        {item.icon}
                      </Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: "#fff",
                          textAlign: "center",
                          width: "100%",
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                    <Divider />
                    <Box
                      sx={{
                        p: 2,
                        pt: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          wordBreak: "break-word",
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Typography variant="body2" color="text.secondary">
                  No items available.
                </Typography>
              </Grid>
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CustomAccordion;