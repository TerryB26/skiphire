import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'
import dayjs from 'dayjs'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BsCalendarDate } from "react-icons/bs";

const DeliveryDateForm = () => {
  const [deliveryDate, setDeliveryDate] = React.useState(dayjs())
  const [collectionDate, setCollectionDate] = React.useState(dayjs().add(1, 'day'))

  return (
    <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
        <Box sx={{ width: '100%', textAlign: 'center', mb: 0, color: '#E8E8E8' }}>
        Select your preferred skip delivery date. We'll aim to deliver between 7am and 6pm on your chosen day.
        </Box>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            maxWidth: 1000,
            margin: '0 auto',
            background: '#f5f5f5',
            borderRadius: 2,
            p: 2,
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1, fontWeight: 'bold' }}>
                <BsCalendarDate style={{ marginRight: 8 }} />
                Delivery Date
              </Box>
              <Box sx={{ textAlign: 'center', mb: 2, color: '#888' }}>
                We'll deliver your skip on this date. Please ensure access is available.
            </Box>
              <StaticDatePicker
                orientation="landscape"
                value={deliveryDate}
                onChange={setDeliveryDate}
                slotProps={{
                  paperContent: {
                    sx: { backgroundColor: 'transparent', boxShadow: 'none' }
                  }
                }}
              />
            </Box>
          </LocalizationProvider>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            maxWidth: 1000,
            margin: '0 auto',
            background: '#f5f5f5',
            borderRadius: 2,
            p: 2,
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1, fontWeight: 'bold' }}>
                <BsFillCalendarDateFill style={{ marginRight: 8 }} />
                Collection Date
              </Box>
                <Box sx={{ textAlign: 'center', mb: 2, color: '#888' }}>
                    We'll collect your skip on this date. Please ensure it's accessible.
                </Box>
              <StaticDatePicker
                orientation="landscape"
                value={collectionDate}
                onChange={setCollectionDate}
                slotProps={{
                  paperContent: {
                    sx: { backgroundColor: 'transparent', boxShadow: 'none' }
                  }
                }}
              />
            </Box>
          </LocalizationProvider>
        </Box>
      </Grid>
    </Grid>
  )
}

export default DeliveryDateForm