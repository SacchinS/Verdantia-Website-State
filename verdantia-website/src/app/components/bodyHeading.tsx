import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    marginTop?: string; // Define marginTop prop
  }
  
  const BodyHeading = ({ children, marginTop }: Props) => {
      return (
        <div
          className="text-lg relative mb-4 ml-[8vw]" // Add ml-20 for left margin alignment
          style={{ 
            fontFamily: 'Bellota Text', 
            color: '#3E3E3E', 
            fontSize: '2.5vw', 
            lineHeight: '3vw',
            marginTop: marginTop || '0', // Use marginTop prop or default to '0'
          }}
        >
          {children}
        </div>
      );
  };  
  
  export default BodyHeading