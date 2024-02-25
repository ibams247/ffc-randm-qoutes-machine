import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons'

import { Typography } from "@mui/material";



const QuotesMachine = ({ selectedqoutes, assignNewqoutesIndex }) => (
    <Card>
      <CardContent>
       <Typography id ="text">
          {selectedqoutes.quote} - <span id ="author">{selectedqoutes.author}</span>
      </Typography>
      </CardContent>
      <CardActions>
         <Button size="small" id="new-quote" onClick={assignNewqoutesIndex}>Next Qoute</Button>
         <IconButton
         id ="tweet-quote"
         targer="_blank"
         href={encodeURI(`https://twitter.com/intent/tweet?text=${selectedqoutes.quote}&hastags=thewebdevcoach`)}
         >
            <FontAwesomeIcon icon={faTwitter} size ="md">
            </FontAwesomeIcon>
         </IconButton>
      </CardActions>
     </Card>
);

export default QuotesMachine;