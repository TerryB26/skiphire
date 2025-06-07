import { Divider, Stack, Tooltip } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IoIosCloseCircleOutline } from "react-icons/io";

const FormDialog = ({
  open,
  handleClose,
  dialogTitle,
  fullWidth,
  maxWidth,
  children,
}) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        PaperProps={{
          sx: {
            height: 'auto',
            maxHeight: 'none', 
          },
        }}
      >
        <DialogTitle
          style={{
            backgroundColor: "rgb(255, 255, 255)",
            color: "black",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <div>{dialogTitle}</div>
            <div>
              <Tooltip title="Close">
                <IoIosCloseCircleOutline
                  onClick={handleClose}
                  style={{ cursor: "pointer", color: "black", fontSize: "1.5rem" }}
                />
              </Tooltip>
            </div>
          </Stack>
        </DialogTitle>
        <Divider />
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
};

export default FormDialog;