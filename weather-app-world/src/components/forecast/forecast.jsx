import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import { AccordionItemHeading } from "react-accessible-accordion";


const Forecast = ({data}) => {
  return (
    <>
    <label className="title">Daitly</label>
    <Accordion allowZeroExpanded>
      {data.list.splice(0,7).map((item,idx) =>(
        <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>


              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
        </AccordionItem>
      ))}

    </Accordion>
  </>
  )
}

export default Forecast
