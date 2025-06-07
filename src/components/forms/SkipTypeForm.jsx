import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import waste2 from "@root/images/waste2.png";
import { useState } from "react";
import { GrMoney } from "react-icons/gr";
import {
  IoArrowRedoCircleOutline,
  IoArrowUndoCircleOutline,
} from "react-icons/io5";
import { MdOutlineTimer } from "react-icons/md";

import { Divider } from "@mui/material";
import { IoArrowRedoCircleSharp, IoArrowUndoCircle } from "react-icons/io5";

const SkipTypes = [
  {
    id: 1,
    name: "2 Yards Skip",
    description: "Ideal for small projects and home renovations.",
    period: "1-2 days",
    price: "$50",
    image: waste2,
  },
  {
    id: 2,
    name: "4 Yards Skip",
    description: "Suitable for medium-sized projects.",
    period: "2-3 days",
    price: "$80",
    image: waste2,
  },
  {
    id: 3,
    name: "6 Yards Skip",
    description: "Perfect for larger home renovations.",
    period: "3-5 days",
    price: "$120",
    image: waste2,
  },
  {
    id: 4,
    name: "8 Yards Skip",
    description: "Great for commercial projects and large clean-ups.",
    period: "5-7 days",
    price: "$160",
    image: waste2,
  },
  {
    id: 5,
    name: "12 Yards Skip",
    description: "Ideal for construction sites and major renovations.",
    period: "7-10 days",
    price: "$200",
    image: waste2,
  },
  {
    id: 6,
    name: "16 Yards Skip",
    description: "Best for large-scale projects and heavy waste.",
    period: "10-14 days",
    price: "$250",
    image: waste2,
  },
];

const CARDS_PER_PAGE = 3;

const SkipTypeForm = () => {
  const [start, setStart] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (id) => {
    setSelected(id);
  };

  const handlePrev = () => {
    setStart((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStart((prev) => Math.min(prev + 1, SkipTypes.length - CARDS_PER_PAGE));
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {start > 0 && (
        <IconButton
          onClick={handlePrev}
          onMouseEnter={() => setHoverPrev(true)}
          onMouseLeave={() => setHoverPrev(false)}
        >
          {hoverPrev ? (
            <IoArrowUndoCircle color="white" size={25} />
          ) : (
            <IoArrowUndoCircleOutline color="white" size={25} />
          )}
        </IconButton>
      )}
      <Box
        sx={{
          width: `${340 * CARDS_PER_PAGE + 24 * (CARDS_PER_PAGE - 1)}px`,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 3,
            transform: `translateX(-${start * (340 + 24)}px)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {SkipTypes.map((skip) => (
            <Card
              key={skip.id}
              onClick={() => handleSelect(skip.id)}
              sx={{
                maxWidth: 400,
                minWidth: 340,
                minHeight: 480,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                flexShrink: 0,
                boxShadow:
                  "4px 4px 12px 0px rgba(128,128,128,0.18), -4px 4px 12px 0px rgba(128,128,128,0.10), 0px 6px 18px 0px rgba(128,128,128,0.20)",
                p: 0,
                border:
                  selected === skip.id
                    ? "2px solid rgb(255, 0, 0)"
                    : "2px solid transparent",
                cursor: "pointer",
                transition: "border 0.2s",
              }}
            >
              <CardActionArea sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={skip.image}
                  alt={skip.name}
                  sx={{
                    objectFit: "contain",
                    width: "200px",
                    height: "200px",
                    margin: "0 auto",
                    mt: 2,
                  }}
                />
                <Divider />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      borderRadius: "12px",
                      backgroundColor: "#E8E8E8",
                      px: 2,
                      py: 1,
                      mx: 1,
                      display: "inline-block",
                      width: "80%",
                      fontWeight: "bold",
                    }}
                  >
                    {skip.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 1 }}
                  >
                    {skip.description}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    <MdOutlineTimer
                      style={{
                        marginRight: 6,
                        color: "black",
                        verticalAlign: "middle",
                        display: "inline-block",
                        position: "relative",
                        top: "-1px",
                      }}
                    />
                    <b>Hire Period:</b> {skip.period}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      borderRadius: "12px",
                      backgroundColor: "rgba(255,0,0,0.8)",
                      px: 2,
                      py: 0.5,
                      mx: 1,
                      display: "inline-block",
                      width: "auto",
                      color: "white",
                    }}
                  >
                    <GrMoney
                      style={{
                        marginRight: 6,
                        verticalAlign: "middle",
                        display: "inline-block",
                        position: "relative",
                        top: "-1px",
                      }}
                      color="white"
                    />
                    <b>Price:</b> {skip.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Box>
      {start + CARDS_PER_PAGE < SkipTypes.length && (
        <IconButton
          onClick={handleNext}
          onMouseEnter={() => setHoverNext(true)}
          onMouseLeave={() => setHoverNext(false)}
        >
          {hoverNext ? (
            <IoArrowRedoCircleSharp color="white" size={25} />
          ) : (
            <IoArrowRedoCircleOutline color="white" size={25} />
          )}
        </IconButton>
      )}
    </Box>
  );
};

export default SkipTypeForm;
