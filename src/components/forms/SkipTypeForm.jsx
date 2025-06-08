import { useEffect, useState } from "react";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ItemsSlider from "@root/components/ItemsSlider";
import waste2 from "../../images/waste2.png";
import { GrMoney } from "react-icons/gr";
import { MdOutlineTimer } from "react-icons/md";

const SkipTypeForm = () => {
  const [skipTypes, setSkipTypes] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch(
      "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
    )
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((skip) => ({
          id: skip.id,
          name: `${skip.size} Yards Skip`,
          description: skip.allowed_on_road
            ? "Allowed on road. Heavy waste permitted."
            : "Not allowed on road.",
          period: `${skip.hire_period_days} days`,
          price: skip.price_before_vat
            ? `$${skip.price_before_vat} + VAT`
            : "N/A",
          image: waste2,
        }));
        setSkipTypes(mapped);
      });
  }, []);

  const handleSelect = (id) => {
    setSelected(id);
  };

  return (
    <Box>
      <ItemsSlider>
        {skipTypes.map((skip) => (
          <Card
            key={skip.id}
            onClick={() => handleSelect(skip.id)}
            className="card"
            style={{
              minWidth: 340,
              maxWidth: 340,
              margin: "0 10px",
              border:
                selected === skip.id
                  ? "2px solid rgb(255, 0, 0)"
                  : "2px solid transparent",
              cursor: "pointer",
              boxShadow:
                "4px 4px 12px 0px rgba(128,128,128,0.18), -4px 4px 12px 0px rgba(128,128,128,0.10), 0px 6px 18px 0px rgba(128,128,128,0.20)",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={skip.image}
                alt={skip.name}
                style={{
                  objectFit: "contain",
                  width: "200px",
                  height: "200px",
                  margin: "0 auto",
                  marginTop: 16,
                }}
              />
              <Divider />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="card-title"
                  sx={{
                    borderRadius: "12px",
                    backgroundColor: "#E8E8E8",
                    px: 2,
                    py: 0.5,
                    mx: 1,
                    display: "inline-block",
                    width: "80%",
                    color: "black",
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
      </ItemsSlider>
    </Box>
  );
};

export default SkipTypeForm;
